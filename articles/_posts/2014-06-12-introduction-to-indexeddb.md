---
title: An Introduction to IndexedDB
authors:
- tiffany-brown


layout: article
---

<p>IndexedDB offers a powerful way to store and retrieve data in the browser. As with server-side databases, IndexedDB allows us to generate keys, search data, or sort it by a particular field.  In this article, we'll dig into the IndexedDB API by building a to-do list manager. But first, let's look at some of the concepts around databases and IndexedDB.</p>

<h2>What is IndexedDB?</h2>

<p>IndexedDB is an asynchronous, transactional, key-value object store. That's a lot of concepts to introduce in one sentence, but I'll try to explain them.</p>

<p><strong>Asynchronous</strong> means that IndexedDB won't block the user interface. Operations happen &#8220;soon&#8221; rather than immediately. This allows the user interface to respond to other input. To contrast: <code>localStorage</code> is <em>synchronous</em>. Operations are processed immediately, and nothing else will happen until the operation completes. Large reads and writes can slow your application significantly.</p>

<p><strong>Transactional</strong> means that operations in IndexedDB are all-or-nothing. Should an operation fail for some reason, the database will revert to its previous state. You'll never have a partially-written record with an IndexedDB database. </p>

<p>A <strong>key-value object store</strong> means that each record is an object, as opposed to a row. Traditional databases use a relational model. Data is organized by table, typically with relationships between the values of one table and the keys of another (<a href="#figure1">Figure 1</a>).</p>

<p>In a key-value object store, each record is a self-contained object. It may, but usually doesn't have a relationship to records in another object store. Each record may even differ radically from other objects <em>in the same store</em>.</p>

<p><img src="indexeddb-inconsistentfields.png" alt="Figure 1: Objects in the same store do not need to have all of the same properties." /></p>

<p>This is the biggest difference between IndexedDB and more traditional databases such as Web SQL or MySQL. With SQL databases, every field must contain a value, even if that value is <code>NULL</code>. With IndexedDB, our <em>schema</em> or database structure can be as flexible as we need it to be.</p>

<p>IndexedDB also has a much larger data capacity than <code>localStorage</code> &#8212; no less than 250MB in most browsers. Upper limits vary. In Internet Explorer, 250MB is the cap. Chrome and Opera use a percentage of available space. Firefox has no known limit. We can also use IndexedDB to store binary data in addition to strings. In other words, we get the familiarity of a JavaScript-like syntax with the data consistency and capacity of Web SQL.</p>

<h2>Current browser support</h2>

<p>Unfortunately, IndexedDB yet isn't available in all major browsers. Opera 15+, Chrome 24+, Firefox 15+, and Internet Explorer 10+ support it. Older versions of Chrome and Firefox support experimental, vendor-prefixed versions of the API. We won't cover those here.</p>

<p>Safari doesn't support IndexedDB at all, nor do Presto-based versions of Opera (&#8804; 12). Instead they support the older <a href="http://www.w3.org/TR/webdatabase/">Web SQL specification</a>. <a href="http://nparashuram.com/IndexedDBShim/">IndexedDBShim</a> smooths out most, but not all of these differences. For browsers that support neither, the best alternative is still to use a server-side database.</p>

<h3>Testing for IndexedDB support</h3>

<p>To test for IndexedDB support, do the following.</p>

<pre><code> var hasIDB = (typeof window.indexedDB === 'undefined');</code></pre>

<p>Or use <a href="http://modernizr.com/">Modernizr</a>.</p>

<pre><code> var hasIDB = Modernizr.indexeddb;</code></pre>

<p>Keep in mind that these tests only work for the latest, un-prefixed version of IndexedDB.</p>


<h2>Building a task manager</h2>

<p>Only excerpts from the <a href="http://webinista.github.io/IDBTaskList/">demo project</a> are featured in this article. But you can <a href="https://github.com/webinista/IDBTaskList">download the source</a> to get a better sense of how each function works in context.</p>

<p>With our task manager, we'll want to:</p>

<ul>
<li>save tasks;</li>
<li>set start and due dates;</li>
<li>set a task's priority;</li>
<li>add a note to each task; and</li>
<li>search task names and notes.</li>
</ul>


<p>First, let's create the form that we'll use to add new tasks to our database.</p>

<pre><code> &lt;form id="addnew"&gt; 
     &lt;div&gt;
        &lt;!-- Used for updates --&gt;
        &lt;input type="hidden" name="key" id="key" value=""&gt;
        &lt;label for="task"&gt;What do you need to do? (required)&lt;/label&gt;
        &lt;input type="text" name="task" id="task" value="" required&gt;
     &lt;/div&gt;

     &lt;div class="txtright"&gt;
        &lt;input type="checkbox" name="status" id="status"&gt;&lt;label for="status"&gt;Completed?&lt;/label&gt;
     &lt;/div&gt;

     &lt;div&gt;
        &lt;label for="start"&gt;Start date:&lt;/label&gt;
        &lt;input type="date" id="start" name="start" value=""&gt;
     &lt;/div&gt;

     &lt;div&gt;
        &lt;label for="due"&gt;Due date:&lt;/label&gt;
        &lt;input type="date" id="due" name="due" value=""&gt;
     &lt;/div&gt;

     &lt;div&gt;
        &lt;label for="priority"&gt;Priority:&lt;/label&gt;
        &lt;select id="priority" name="priority"&gt;
            &lt;option value="0"&gt;None&lt;/option&gt;
            &lt;option value="1"&gt;1 - High&lt;/option&gt;
            &lt;option value="2"&gt;2&lt;/option&gt;
            &lt;option value="3"&gt;3 - Medium&lt;/option&gt;
            &lt;option value="4"&gt;4&lt;/option&gt;
            &lt;option value="5"&gt;5 - Low&lt;/option&gt;
        &lt;/select&gt;
     &lt;/div&gt;

    &lt;div&gt;
        &lt;label for="tasknotes"&gt;Task notes&lt;/label&gt; 
        &lt;textarea id="tasknotes" name="tasknotes" cols="30" rows="3"&gt;&lt;/textarea&gt;
        &lt;button type="submit" id="submit"&gt;Save entry&lt;/button&gt;
        &lt;button type="button" id="delete" class="hidden" &gt;Delete entry&lt;/button&gt;
    &lt;/div&gt;
 &lt;/form&gt;
</code></pre>

<p>The HTML above (plus some CSS) produces a form that looks a bit like the example in Figure 2.</p>

<p><img src="indexeddb-form.png" alt="Figure 2: Our task manager form." /></p>

<p><em>What do you need to do?</em> is the only required form field, and we'll use this form to add and update tasks.</p>

<p>Now that we've defined what we're collecting, let's do the work of building our database.</p>

<h2>Creating a database</h2>

<p>To create an IndexedDB database, use the <code>open()</code> method of the <code>indexedDB</code> object.</p>

<pre><code>var idb = indexedDB.open('IDBTaskManager', 1);
</code></pre>

<p>That first argument is the name of our database. It's required, and must be a string. Database names can be just about any string, including an empty one (<code>''</code>). However, each database name must be unique for its <em>origin</em>. The origin is the combination of scheme, host name, and port -- <i>http://dev.opera.com</i>, or <i>http://www.example.com:80</i>, for example.</p>

<p>The optional second argument is the version number of our database. Since this is the first iteration of our application, we've set it to 1.</p>

<p>Without a version number argument, <code>open</code> will create the database if it doesn't exist, and set its version to 1. If the database does exist, <code>open</code> will create a connection to it.</p>

<p>Version numbers must be an <em>integer</em> greater than zero. Float values will just be converted to integers; 2.5 will become 2 and 0.8 will become 0 (which causes an error). The maximum allowed value of a version number is 2<sup>53</sup> or 9,007,199,254,740,992. This maximum also applies to generated keys.</p>

<p class="note"><b>NOTE:</b> In Opera, you can inspect IndexedDB object stores, keys and values in the <i>Resources</i> panel of Opera's Developer tools (Developer &rarr; Web Inspector).</p>

<p>Should this open operation work, it will return a <code>IDBOpenDBRequest</code> object, and trigger a <code>success</code> event. Let's define an <code>onsuccess</code> callback for this event. Within it, we will assign the <code>IDBDatabase</code> object <code>event.target.result</code> to a variable that shares scope with our other functions.</p>

<pre><code>var dbobject; // Define a global variable to hold our database object
idb.onsuccess = function(evt){
    dbobject = evt.target.result;
}</code></pre>

<p>With IndexedDB, every operation or <strong>transaction</strong> on our database must occur within a callback function. To do that, our database object needs to be available to every function that makes a transaction.</p>

<h3>Database versioning</h3>

<p>When the database version of the application is greater than what's stored by the client, the browser will fire an <code>upgradeneeded</code> event. This includes the application's first run, when the initial version number is zero.</p>

<p>Triggering an <code>upgradeneeded</code> event is the only way to make structural changes to a database. Structural changes include creating and deleting object stores, or adding indexes. We can make these changes within an <code>onupgradeneeded</code> callback, as shown below.</p>

<pre><code>idb.onupgradeneeded = function (evt) {
    if (evt.oldVersion &lt; 1) {
        // Create our object store and define indexes.
    }
}
</code></pre>

<p>Attempting to create an object store or index that already exists will cause an error. But we can use the <code>oldVersion</code> property of the <code>upgradeneeded</code> event to manage changes, as we'll see elsewhere in this piece.</p>

<p>If fired, the <code>upgradeneeded</code> event will occur before the connection <code>success</code> event. Our <code>dbobject</code> variable won't be defined when <code>idb.onupgradeneeded</code> is called. Keep that in mind when developing applications.</p>

<h2>Creating an object store</h2>

<p>Creating a database alone is pointless. To save and manipulate records, we'll also need to create an <strong>object store</strong>. Object stores are similar to SQL tables; it's the unit that holds our collection of entries or <em>records</em>.</p>

<p>Adding an object store is a structural change, so we'll need to do it from within our <code>onupgradeneeded</code> callback. Let's add an object store named <code>tasks</code> using the <code>createObjectStore</code> method.</p>

<pre><code>idb.onupgradeneeded = function(evt){
    var dbobject = evt.target.result;
    /* Check our version number */
    if (evt.oldVersion &lt; 1) {
        dbobject.createObjectStore('tasks',{autoIncrement: true});
    }
}; 
</code></pre>

<p>The first argument for <code>createObjectStore</code> is required. It's the name of the object store. The second argument is optional, but must be a <em>dictionary</em> that defines key options for the store.</p>

<p>Dictionaries resemble JavaScript object literals. But they're actually associative arrays with defined keys and values. Dictionaries let us pass arguments without worrying about their order. With <code>createObjectStore</code>, the dictionary may only contain the following properties and values.</p>

<ul>
    <li><code>keyPath</code>: Defines which object property should be used as the key for each record; <code>null</code> by default.</li>
    <li><code>autoIncrement</code>: A boolean value that determines whether or not to auto-generate keys for each record; <code>false</code> by default.</li>
</ul>


<p>Setting a <code>keyPath</code> makes the specified property a required one. Using <code>{keyPath: 'task'}</code>, for example, means that every object added to the store must have a <code>task</code> property.</p>

<p>In our demo, however, we'll use <code>autoIncrement</code>. Using either <code>autoIncrement</code> or <code>keyPath</code> means that we won't have to specify a key argument for the <code>add</code> and <code>put</code> methods.</p>

<p class="note"><b>NOTE:</b> You can use <code>autoIncrement</code> and <code>keyPath</code> together. Keys will be numeric and generated. Objects will have a required field.</p>

<h2>Working with records</h2>

<p>Working with records &#8212; adding, updating, deleting, or retrieving &#8212; is generally a four-step process.</p>

<ol>
<li>Create a transaction connection to one or more object stores using <code>readwrite</code> or <code>readonly</code> mode.</li>
<li>Specify which object store to query with our transaction request.</li>
<li>Make a request using the one of the request methods, or a cursor object.</li>
<li>Do something with the results, if any, using an <code>onsuccess</code> callback.</li>
</ol>


<p>Working with individual records is slightly different than working with sets of records. In this section we'll work with single records. In the section <a href="#cursors">Using cursors to retrieve multiple records</a>, we'll work with sets.</p>

<h3>Adding a record</h3>

<p>To add a record, we have two options: <code>add()</code> and <code>put()</code>. The <code>add()</code> method can only be used when adding a new record, while <code>put()</code> can be used to add <em>or</em> update records. Both of these methods accept up to two arguments.</p>

<ul>
<li><code>value</code> (required): The object to save</li>
<li><code>key</code> (optional): The object's key; only necessary if <code>autoIncrement</code> is false, and no <code>keyPath</code> is defined.</li>
</ul>


<p>Let's save a task to our database when the user submits the task form.</p>

<pre><code>var addnewhandler, addnew;
addnew = document.getElementById('addnew');

addnewhandler = function (evt) {
    'use strict';
    evt.preventDefault();

    var entry = {}, transaction, objectstore, request, fields = evt.target, o;

    /* Build our task object. */
    for (o in fields) {
        if ( fields.hasOwnProperty(o)) {
            entry[o] = fields[o].value;
        }
    }

    /* Open a transaction for writing */
    transaction = dbobject.transaction(['tasks'], 'readwrite');
    objectstore = transaction.objectStore('tasks');

    /* Save the entry object */
    request = objectstore.add(entry);

    transaction.oncomplete = function (evt) {
        displaytasks(dbobject);
    };

    transaction.onerror = errorhandler; };

addnew.addEventListener('submit', addnewhandler);
</code></pre>

<p>We don't really need to sanitize these values, since harmful input is limited to the client. Do escape &lt; and &gt; characters when outputting so they aren't mistaken for HTML tag boundaries. If you plan to synchronize IndexedDB data with a database server, however, be sure to filter and escape user input as appropriate for your database.</p>

<p>Our next step: open a transaction connection to the database object using the <code>transaction</code> method. The <code>transaction</code> method accepts two arguments: a <strong>sequence</strong> of object store names, and the <strong>mode</strong> of this transaction.</p>

<p>A sequence is a list of one or more object stores on which to perform transactions. Here, we are only opening one object store, <code>tasks</code>.</p>

<p>But let's say that our application allows us to assign tasks to people. Those people and their roles are in the object store <code>assignees</code>. If we also wanted to use read or write from <code>assignees</code>, we could open both at once.</p>

<pre><code>transaction = dbobject.transaction(['tasks', 'assignees'], 'readwrite');</code></pre>

<p class="note"><b>NOTE:</b> In the latest versions of most browsers, the <code>[</code> and <code>]</code> are optional if you're opening a connection to a single object store. Some slightly older browsers still require them. For broadest compatibility, use square brackets.</p>

<p>For the <em>mode</em> argument, we have two choices: <code>readwrite</code> and <code>readonly</code>. Using <code>readwrite</code> lets us retrieve, add, update, or delete records. However, to preserve data integrity, only one <code>readwrite</code> transaction can run at a time.</p>

<p>Use <code>readonly</code> when if you only want to retrieve records for display. Multiple <code>readonly</code> can run on the same object store at the same time, which helps performance. Since we are adding a record, we'll use <code>readwrite</code> mode.</p>

<p>Step three is to select which object store to use for our request using <code>transaction.objectStore('tasks');</code>.</p>

<p>Finally, <code>request = objectstore.add(entry)</code> writes our <code>entry</code> object to the database. The <code>displaytasks</code> function will be invoked when the transaction completes.</p>

<p>To add multiple records, just invoke the <code>add()</code> method multiple times using the same request object.</p>

<pre><code>request = objectstore.add({object1:'Test object 1'});
request = objectstore.add({object2:'Test object 2'});
request = objectstore.add({object3:'Test object 3'});</code></pre>

<p>In this case, the <code>success</code> and <code>complete</code> events will fire once after all <code>add</code> or <code>put</code> operations complete, instead of firing once for each.</p>


<h3>Updating a record</h3>

<p>Updates must use the <code>put</code> method, and must include a key argument. Leaving it out will create a new record, but that's not what we want here.</p>

<p>Our application uses the same view for both adding and editing tasks. Let's use the <code>addnewhandler</code> function to handle additions and updates. We just need to modify it for updates by adding a conditional. If our form's <code>key</code> field is empty, we'll add a record. If it has a value, we will update with <code>put</code>.</p>

<pre><code>addnewhandler = function (evt) {
    evt.preventDefault();

    var entry = {}, transaction, objectstore, request, fields = evt.target, o;

    for (o in fields) {
        if ( fields.hasOwnProperty(o)) {
            entry[o] = fields[o].value;
        }
    }

    transaction = dbobject.transaction(['tasks'], 'readwrite');
    objectstore = transaction.objectStore('tasks');

    /* 
    Save the entry object with a key if one is available.
    */

    if(fields.key.value){
        // +fields.key.value converts our key to a number 
        request = objectstore.put(entry, +fields.key.value); 
    } else {
        request = objectstore.add(entry);
    }

    transaction.oncomplete = function (evt) {
        displaytasks(dbobject);
    };

    transaction.onerror = errorhandler; 
};
</code></pre>

<h3>Retrieving a record</h3>

<p>In order to update a record, of course, we first need to retrieve it. Here we can use the <code>get</code> method. When the user clicks on a task in the list, it will trigger a <code>hashchange</code> event. Let's define a <code>hashchangehandler</code> function to retrieve matching item.</p>

<pre><code>hashchangehandler = function (evt) {
    var transaction, objectstore, request, key;

    if (window.location.hash) {
        /* 
        Extract digit characters from the hash, and convert to a number. 
        Generated IndexedDB keys are numbers. String values won't work. 
        */
        key = +window.location.hash.match(/\d/g).join('');
        
        /* Run a read-only transaction on this object store. */ 
        transaction = dbobject.transaction(['tasks'], 'readonly');
        objectstore = transaction.objectStore('tasks');

        /* Retrieve the record by its key */
        request = objectstore.get(key);

        /* If it's successful, update our form fields. */
        request.onsuccess = function (successevent) {
            var o, data = successevent.target.result;

            for(o in data){
                if( o == 'status'){
                    addnew.status.checked = !!data.status;
                }                   
                addnew[o] = data[o];
            }
        };

        transaction.oncomplete = function (evt) {
            hide('#tasklist');
            show('#addnew');
        }
    }
};
</code></pre>

<p>The <code>get</code> method retrieves our record. It accepts a single argument: the key of the record to retrieve. Since we're just retrieving a record our transaction mode can be <code>readonly</code>.</p>

<p class="note"><b>NOTE:</b> IndexedDB keys are strict about type, and our generated keys are numbers. Passing a string to <code>get</code> &#8212; even if numeric &#8212; won't work. You'll need to convert the argument to a number as we've done above.</p>

<p>If our request is successful, we will populate the <code>#addnew</code> form with the result of our <code>get</code> transaction.</p>

<p>You should define an <code>onsuccess</code> callback any time your request may return results. We've also defined an <code>oncomplete</code> callback that will be invoked when the transaction completes rather than when the request ends. A transaction will always finish even if a request fails.</p>

<h3>Deleting a record</h3>

<p>Let's use a similar approach for deleting a record as we did for retrieving one. This time, however, we'll use the <code>delete</code> method. Like <code>get</code>, <code>delete</code> requires a single argument, the key of the object to delete from the store. We also need to open our transaction in <code>readwrite</code> mode.</p>

<pre><code>deletehandler = function (evt) {
    var transaction, objectstore, request, key;

    if (window.location.hash) {
        /* Retrieve the key from the hash and convert it to a number */
        key = +window.location.hash.match(/\d/g).join('');

        /* Perform the transaction */
        transaction = dbobject.transaction(['tasks'], 'readwrite');
        objectstore = transaction.objectStore('tasks');
        request = objectstore.delete(key);

        /* Recreate the task list display */
        transaction.oncomplete = function (evt) {
            tbody.innerHTML = '';
            displaytasks(dbobject);
        };

        transaction.onerror = errorhandler; 
    }
};
</code></pre>

<p>Here we've only defined an <code>oncomplete</code> handler for the <code>transaction</code> object, since <code>delete</code> won't return a result set.</p>

<h4>Record deletions and auto-generated keys</h4>

<p>As with other kinds of databases, deleting a record does not reset the value of the key generator. In <a href="#figure3">Figure 3</a>, you can see that we have only 16 records in our database. However, the most recent entry has a key of 30.</p>

<p><img src="indexeddb-keydontreset.png" alt="Figure 4: The key generator isn't reset when records are deleted from the database." /></p>

<p>It's possible, however, to reuse the key of a deleted record. Just pass the desired key as the second argument of <code>add</code> or <code>put</code>.</p>

<h2>Using cursors to retrieve multiple records</h2>

<p>Retrieving <em>sets of records</em> works a bit differently. For that, we need to use a <strong>cursor</strong>. Cursors are, as explained by the IndexedDB specification, <q>are a transient mechanism used to iterate over multiple records in a database.</q> In a range of records, the cursor keeps track of where it is in the sequence. The cursor moves in ascending or descending order, depending on which direction chosen when opening the cursor. Cursors are a little bit like using a <code>while</code> loop.</p>

<p>Let's take a look at how to retrieve a set of results with a cursor.</p>

<pre><code>var displaytasks = function (database) {
    var transaction, objectstore, request;

    transaction = dbobject.transaction(['tasks'], 'readonly');
    objectstore = transaction.objectStore('tasks');
    request = objectstore.openCursor(IDBKeyRange.lowerBound(0), 'next');

    request.onsuccess = function (successevent) {
        var task, tbody = document.querySelector('#list tbody');
        if (request.result) {
            task = buildtask(request.result);
            tbody.appendChild(task);
            cursor.continue(); // advance to the next result
        }
    }
}
</code></pre>

<p>Again we've started by creating a transaction object and selecting an object store. What we've done differently however, is open a cursor object using the <code>openCursor</code> method.</p>

<p>The <code>openCursor</code> method accepts up to two arguments. Both are optional.</p>

<ul>
<li><strong>range</strong>: Must be either a key or a <em>key range</em>; and</li>
<li><strong>direction</strong>: Must be one of <code>'next'</code>, <code>'prev'</code>, <code>'nextunique'</code>, or <code>'prevunique'</code>.</li>
</ul>


<h3>Creating a key range</h3>

<p>To create a key range, we need to use the <code>IDBKeyRange</code> interface. All of its methods are static.</p>

<ul>
<li><code>IDBKeyRange.lowerBound</code>: Sets a lower key boundary only.</li>
<li><code>IDBKeyRange.upperbound</code>: Sets an upper key boundary only.</li>
<li><code>IDBKeyRange.bound</code>: Sets upper and lower key boundaries.</li>
<li><code>IDBKeyRange.only</code>: Accepts a single key value; a cursor-based alternative to <code>get</code>.</li>
</ul>


<p>We've set a lower bound of zero here using <code>IDBKeyRange.lowerBound</code>, and haven't set an upper limit. Every record with a key value that's greater than zero will be returned &#8212; that's every record in the <code>tasks</code> object store, oldest first.</p>

<p><code>IDBKeyRange.upperBound</code> retrieves all objects with key values that are less than the argument provided. For example,  <code>IDBKeyRange.upperBound(20)</code> would return every object with a key of 20 or less.</p>

<p><code>IDBKeyRange.bound</code> retrieves objects with key values ranging from the lower bound argument through the upper bound argument. To retrieve records with keys between 11 and 20, for example, we would use <code>IDBKeyRange.bound(11,20)</code>.</p>

<p>None of these methods return a <em>number of results</em>. Instead they return <em>keys within the range</em>. Let's say, for example, that our object store keys are 1, 2, 4, 8, 9, 11, 15, 16, 20, 21, 22, and 23. We've deleted a few entries, so there are gaps in our key sequence.</p>

<ul>
	<li><code>IDBKeyRange.lowerBound(0)</code> would return all objects.</li>
	<li><code>IDBKeyRange.lowerBound(10)</code> would return objects for keys 11, 15, 16, 20, 21, 22 ,and 23.</li>
	<li><code>IDBKeyRange.upperBound(0)</code> wouldn't return any objects.</li>
	<li><code>IDBKeyRange.upperBound(10)</code> wouldn't return objects for keys 1, 2, 4, 8, and 9.</li>
	<li><code>IDBKeyRange.bound(0,20)</code> would return all objects except for keys 21, 22, and 23.</li>
</ul>

<p>Though the bounds of a key range are included in the result set, it's possible to exclude them with an additional <code>open</code> argument. It must be a boolean, and <code>false</code> is the default. To skip the first record in our result set, for instance, we could use <code>IDBKeyRange.lowerBound(0, true)</code>.</p>

<p><code>IDBKeyRange.bound</code> is a little different. It accepts <em>two</em> additional arguments: <code>lowerOpen</code> and <code>upperOpen</code>. If we wanted to exclude our first and last results from an <code>IDBKeyRange.bound</code> range, we would pass <code>true</code> twice: <code>IDBKeyRange.bound(0, 10, true, true)</code>.</p>

<h3>Selecting a cursor direction</h3>

<p>The second argument of <code>openCursor</code> indicates which direction the cursor should move. Using <code>next</code> means that our records will be sorted by key in ascending order. Using <code>prev</code> &#8212; short for "previous" &#8212; orders results in descending order. We can also exclude duplicate keys with <code>nextunique</code> and <code>prevunique</code>, which is particularly useful when working with indexed properties.</p>

<h2>Adding indexes</h2>

<p>So far, we've retrieved entries by key and key range. But for a to-do list, we may want to retrieve and sort our records by task name, priority, due date, or status. This is where indexes come in handy.</p>

<p class="note"><b>NOTE:</b> As of publication, IndexedDBShim, does not fully support opening cursors on indexes. You'll need to implement another sorting mechanism.</p>

<p>Think of indexes as a quick way to sort and order your records. Indexes lets you look up objects by their properties rather than by their keys.</p>

<p>To add an index to our object store, we need to use the <code>createIndex</code> method. Because adding an index is a structural change, we'll need to do it in response to a <code>versionchange</code> event using an <code>onupgradeneeded</code> callback. Let's update our <code>onupgradeneeded</code> function from above.</p>

<pre><code>idb.onupgradeneeded = function (evt) {
    var tasks, transaction; 
    
    dbobject = evt.target.result;

    if (evt.oldVersion &lt; 1) {
        tasks = dbobject.createObjectStore('tasks', {autoIncrement: true});
        /* Create indexes on the object store. */
        transaction = evt.target.transaction.objectStore('tasks');
        transaction.createIndex('by_task', 'task');
        transaction.createIndex('priority', 'priority');
        transaction.createIndex('status', 'status');
        transaction.createIndex('due', 'due');
        transaction.createIndex('start', 'start');
    }
};</code></pre>

<p>The <code>createIndex</code> method accepts up to three arguments.</p>

<ul>
	<li><code>name</code> (<em>required</em>): The name of the index to add.</li>
	<li><code>keyPath</code>(<em>required</em>): The object property to track.</li>
	<li><code>optionalParameters</code>: A dictionary containing settings &#8212; <code>unique</code> and/or <code>multiEntry</code> &#8212; for the index.</li>
</ul>


<p>Here we've added indexes to our <code>task</code>, <code>priority</code>, <code>status</code>, <code>start</code>, <code>due</code> and fields. Indexes may share the same name as the properties they track.</p>

<p>Only those objects containing the indexed property will be entered in the index store.</p>

<p><img src="indexeddb-index.png" alt="Figure 3: A look at the by_task index table in Opera." /></p>

<p>When the properties of a record change, those changes are also reflected in the index table. Let's take a look at retrieving records based on an index. We'll update our <code>displaytasks</code> function from above.</p>

<h3>Retrieving records using an index</h3>

<p>In the previous version of our <code>displaytasks</code> function, we opened a cursor on our object store. Here we'll need to add a line that retrieves our <code>by_task</code> index instead. Then we'll call <code>openCursor</code> on the index.</p>

<pre><code>var displaytasks = function (database) {
	var transaction, objectstore, request, index;

    transaction = dbobject.transaction(['tasks'], 'readonly');
    objectstore = transaction.objectStore('tasks');

    /* New line to select the index. */
    index = objectstore.index('by_task');

    /* 
    Our request opens a cursor on the index, 
    rather than the object store. 
    */
    request = index.openCursor(IDBKeyRange.lowerBound(0), 'next');

    request.onsuccess = function (successevent) {
        var task, tbody = document.querySelector('#list tbody');
        if (request.result) {
            task = buildtask(request.result);
            tbody.appendChild(task);
            cursor.continue();
        }
    }
}
</code></pre>

<p>Indexes also order values for each property tracked. Our updated <code>displaytasks</code> function above will return an alphabetical list of tasks.</p>

<h3>Limits of indexes</h3>

<p>Unfortunately, IndexedDB lacks the kind of full-text searching that you would find with SQL databases such as MySQL or PostgreSQL. Instead, we need to filter our results using a regular expression. Let's look at an example using our search form. When it's submitted, we'll grab the form value and use it to create a regular expression. Then we'll test each task for a match.</p>

<pre><code>var searchhandler, search = document.getElementById('search');
searchhandler = function (evt) {
    evt.preventDefault();
    var transaction, objectstore, index, request;

    transaction = dbobject.transaction(['tasks'], 'readwrite');
    objectstore = transaction.objectStore('tasks');
    index = objectstore.index('by_task');
    request = index.openCursor(IDBKeyRange.lowerBound(0), 'next');

    request.onsuccess = function (successevent) {
        var reg, cursor, task;
        reg = new RegExp(evt.target.find.value, "i");
        cursor = request.result;

        if (cursor !== null) {
            if (reg.test(cursor.value.task)) {
                task = buildtask(cursor);
            }
            cursor.continue();
        }
    }
}
search.addEventListener('submit', searchhandler);
</code></pre>

<p>Figure 6 shows the results of such a search.</p>

<p><img src="indexeddb-search.png" alt="Figure 6: Filtering tasks with a regular expression search." /></p>

<p>Regular expression searches have their limits, however. A search for "cafe" won't match "caf&eacute;" since 'e' and '&eacute;' are two different characters. However, using this technique means you can pass a regular expression as an argument and search for <code>caf.*</code></p>

<h2>Conclusion</h2>

<p>IndexedDB brings basic database capability to the browser, making it possible to build web applications that work online and off. It does, however, require shifting your mind a bit, and becoming familiar with database concepts.</p> 

<p>To learn all of the ins and outs of IndexedDB, read through the <a href="http://www.w3.org/TR/IndexedDB/">IndexedDB specification</a>. It's not an easy read, but it is the definitive reference. Mozilla Developer Network also covers some of the <a href="https://developer.mozilla.org/en-US/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB">concepts behind IndexedDB</a>, in case they're unclear.</p>