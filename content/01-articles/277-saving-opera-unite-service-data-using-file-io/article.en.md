Title: Saving Opera Unite service data using File I/O
----
Date: 2009-07-15 12:14:06
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

<h2>Introduction</h2>
<p>The <a href="http://dev.opera.com/libraries/fileio/">File I/O API</a> provides functions that allow you to manipulate files and folders from your code, allowing you to provide persistent storage for your application&#39;s state, or share files from a folder the user chooses on their local filesystem. In the context of Unite services, this is very useful for persistent content created by not only you, but also by your users.  This article will cover the basics of the File I/O API by modifying the simple blog example from the <a href="http://dev.opera.com/articles/view/opera-unite-developer-primer/">Opera Unite developer&#39;s primer</a>. We will store the blog entries in files and load them whenever the service restarts.</p>

<p>Table of contents:
<ul>
    <li><a href="#getready">Get the source</a></li>
    <li><a href="#servicemodify">Modifying the example blog service</a>
        <ul>
            <li><a href="#modifyaccess">Enable access to the File I/O API</a>
                <ul>
                    <li><a href="#accessmount">A brief overview of mount points</a></li>
                </ul>
            </li>
            <li><a href="#modifyscriptjs">Modifying the main script.js</a>
                <ul>
                    <li><a href="#scriptjsmount">Mounting our storage directory</a></li>
                    <li><a href="#scriptjssave">Saving blog entries to a file</a></li>
                    <li><a href="#scriptjsload">Loading the blog entries</a></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><a href="#binarynote">A note about binary data</a></li>
    <li><a href="#moreinfo">Additional Information</a></li>
</ul>
</p>

<h2 id="getready">Get the source</h2>
<p>If you have not already read the <a href="http://dev.opera.com/articles/view/opera-unite-developer-primer/">Opera Unite developer&#39;s primer</a> and familiarised yourself with Unite basics, we suggest you to read them first before diving into the specifics of File I/O.</p>

<p>You can download the <a href="http://dev.opera.com/articles/view/opera-unite-developer-primer/blog.us">original Opera Unite blog source</a> as well as the <a href="blog.us">modified blog source</a> created throughout the course of this article.  It is recommended that you download the original source and follow along with this article, making the changes as you go so you can get a better understanding of what is happening.
</p>

<h2 id="servicemodify">Modifying the example blog service</h2>
We will now begin by modifying the blog service.  If something is unclear or you wish to know more about specific functions the <a href="http://dev.opera.com/libraries/fileio/">File I/O API documentation</a> is an excellent resource. 

<h3 id="modifyaccess">Enable access to the File I/O API</h3>
<p>Unite Services do not have access to the filesystem by default; they must explicitly request it. To do this, add the following  <code>&lt;feature&gt;</code> tag to the <code>config.xml</code> file.</p>

<pre><code>
&#x2026;
&lt;feature name=&quot;http://xmlns.opera.com/fileio&quot;&gt;
&lt;/feature&gt;
&#x2026;
</code></pre>

<p>This code alone will give us access to two locations on the disk.  The first is the Application directory, which is the location where the service files are stored. The second is a private storage directory, which is what we will be using in this service for persistent storage of the blog entries.  If you wish to have access to some other location, you will need to add the <code>folderhint</code> parameter to this feature, which will add a folder selection box to the services configuration page.<p>

<p>The following is an example of how to use the <code>folderhint</code> parameter to ask the user to choose their home folder.</p>
<pre><code>
&lt;feature name=&quot;http://xmlns.opera.com/fileio&quot;&gt;
    &lt;param name=&quot;folderhint&quot; value=&quot;home&quot; /&gt;
&lt;/feature&gt;
</code></pre>


<p>The value of this parameter specifies how the question of which folder to share is presented to the user.  For example, if the value is desktop, the service settings page asks the user to &quot;Select the Desktop folder or another location from which you want to share content.&quot;  There are a few other predefined values you can use and they are listed on the <a href="http://dev.opera.com/libraries/fileio/">File I/O API Overview</a>.  Regardless of the value used, the user is presented with the option to choose a folder, and the folder will be made available to the service.</p>

<h4 id="accessmount">A brief overview of mount points</h4>

<p>What we have done so far doesn&#39;t allow us to immediately access the files in the chosen location.  The files will be unavailable until they are mounted to a <a href="http://en.wikipedia.org/wiki/Mount_(computing)">mount point</a> by our service.  Once they are mounted to a mount point, all of the files and folders will be available at the path to that mount point.  The function to do this is the <code><a href="http://dev.opera.com/libraries/fileio/docs/opera.io.filesystem.dml#mountSystemDirectory">mountSystemDirectory</a></code> function.  This function takes two arguments:</p>

<ol>
<li>The first is the location to mount.  There are three valid values for the location - <code>application</code>, <code>storage</code>, and <code>shared</code>.  The <code>storage</code> value is what we will be using for this service; it provides us access to a private directory only available to our service.  The <code>shared</code> value will give you access to the folder the user chooses, and the <code>application</code> value gives you access to the directory where the actual files that make up the service are stored.</li>

<li>The second argument to the function is the name you want to use for the mountpoint.  This can be empty, in which case it will be mounted under the same name as the first argument.  The important thing is that this function returns a <code><a href="http://dev.opera.com/libraries/fileio/docs/File.dml">File</a></code> object we can use to reference the folder we mounted, and perform actions on it.</li>
</ol>

<h3 id="modifyscriptjs">Modifying the main script.js</h3>

<p>We will now move on to the main code driving the blog - the <code>script.js</code> file inside the script folder.  This file is rather short, and it is recommended that you familiarize yourself with how this service works before moving on to tinker with File I/O.</p>

<h4 id="scriptjsmount">Mounting our storage directory</h4>
<p>The first thing we need to do is to mount the private storage directory so we have somewhere to store our blog entries.  We will do this by adding a global variable named <code>storage_dir</code> to the top of the file, and then mount the directory right after the last call to <code>addEventListener</code>.</p>

<pre><code>var storage_dir;
&#x2026;
webserver.addEventListener(&#39;save&#39;, saveEntry, false);
storage_dir = opera.io.filesystem.mountSystemDirectory(&#39;storage&#39;);
&#x2026;</code></pre>

<h4 id="scriptjssave">Saving blog entries to a file</h4>
<p>Now that we have our directory mounted and a <code>File</code> object referring to it, we will modify the <code>saveEntry</code> function to write the blog entry to a file.  Let me take a moment to explain how we are going to store the blog entries.  All of the blog entries will be stored in a folder called &quot;entries&quot;. The &quot;entries&quot; variable was created earlier in the previous tutorial and will be used as an array to store &#39;title&#39;, &#39;text&#39; and &#39;date&#39; of blog posts.
</p>
<p>
Each blog entry will be stored in a file with an id for the filename, which is simply a number.  Inside each file, the first line contains the title of the blog post, the second line contains the date of the post, and the rest of the file contains the content of the blog post itself.  Let&#39;s take a look at the entire modified <code>saveEntry</code> function, and then go over each line.</p>

<pre><code>function saveEntry(e)
{
    var request = e.connection.request;
    var response = e.connection.response;

    //Get POST data
    var title = request.bodyItems[&#39;title&#39;][0];
    var text = request.bodyItems[&#39;text&#39;][0];

    entries.push({
        &#39;title&#39; : title, 
        &#39;text&#39;  : text,
        &#39;date&#39;  : new Date()
    });

    // Write this entry to a file
    var id = entries.length-1;
    var filestream = storage_dir.open(&#39;entries/&#39; + id, &#39;w&#39;);
    filestream.writeLine(entries[id].title);
    filestream.writeLine(entries[id].date);
    filestream.write(entries[id].text);
    filestream.close();

    //Redirect back to the index of the service
    response.setStatusCode(302);
    response.setResponseHeader( &#39;Location&#39;, webserver.currentServicePath );
    response.close();
}</code></pre>

<p>We begin by getting the <code>id</code> of this entry, which we will use
as the filename.</p>

<pre><code>var id = entries.length-1;</code></pre>

<p>Next we need to open a file to write to.  This is as simple as calling the <code><a href="http://dev.opera.com/libraries/fileio/docs/File.dml#open">open</a></code> function of our global <code>storage_dir</code> object.  We pass in the first argument as the path we want to open, relative to the <code>File</code> object we are calling <code>open</code> on.  So if our <code>storage_dir</code> object was actually referring to the entries folder itself, we would call <code>open(id, &#39;w&#39;);</code> instead, and not need to specify the full path.  The second argument is the file mode we want to open the file as.  The values for this are very similar to other programming languages, so you can use values such as <code>&#39;r&#39;</code> for reading, or <code>&#39;a&#39;</code> for appending to a file.  The possible values and their meanings are covered in the API docs for <code><a href="http://dev.opera.com/libraries/fileio/docs/File.dml#open">open</a></code>.  This function returns a <a href="http://dev.opera.com/libraries/fileio/docs/FileStream.dml">FileStream</a> object that we can then use for reading or writing.

<pre><code>var filestream = storage_dir.open(&#39;entries/&#39; + id, &#39;w&#39;);</code></pre>

<p>We can now write the actual blog entry to the file we have opened.  There are a few different functions for writing data to a file, depending on what you wish to write.  We use two different ones here, <code><a href="http://dev.opera.com/libraries/fileio/docs/FileStream.dml#writeLine">writeLine</a></code>, and <code><a href="http://dev.opera.com/libraries/fileio/docs/FileStream.dml#write">write</a></code>.  The <code>write</code> function simply writes a string to a file, while the <code>writeLine</code> function does that and then appends a newline.  Looking at the code we can see that we are writing the blog entries&#39; title on the first line, the date on the second, and the contents of the blog into the rest of the file.</p>

<pre><code>filestream.writeLine(entries[id].title);
filestream.writeLine(entries[id].date);
filestream.write(entries[id].text);</code></pre>

<p>We have told the system to write our entry to the file, and now we just have one last thing to do.  We no longer need to reference this filestream, so we close it with the <code><a href="http://dev.opera.com/libraries/fileio/docs/FileStream.dml#close">close</a></code> function.</p>

<pre><code>filestream.close();</code></pre>

<h4 id="scriptjsload">Loading the blog entries</h4>
<p>Now that we have taken care of saving our files, we need to add some codes to load them when the service starts.  The most logical place to add this code is in the <code>window.onload</code> function, right below where we mounted our directory.  The following code block shows the modified function, containing everything we are adding below the mount function we added earlier.</p>

<pre><code>&#x2026;
// Make the private storage directory available to us
storage_dir = opera.io.filesystem.mountSystemDirectory(&#39;storage&#39;);

var entries_dir = storage_dir.resolve(&#39;entries&#39;);
if(!entries_dir.exists)
    storage_dir.createDirectory(&#39;entries&#39;);

// Load entries
entries_dir.refresh();
for(var i=0; i&lt;entries_dir.length; i++)
{
    var entry = entries_dir[i];
    var id = parseInt(entry.name);

    var filestream = entry.open(null,&#39;r&#39;);
    var title = filestream.readLine();
    var date = filestream.readLine();
    var text = filestream.read(filestream.bytesAvailable);
    filestream.close();

    entries[id] = {
        &#39;title&#39; : title,
        &#39;text&#39;  : text,
        &#39;date&#39;  : date
    };
}
&#x2026;</code></pre>

<p>Since we are going to be storing the blog entries in a folder named &quot;entries&quot;, we need to get a <code><a href="http://dev.opera.com/libraries/fileio/docs/File.dml">File</a></code> object that refers to that folder so we can list the files in it. (Note that <code>File</code> objects can refer to either files or directories.)  To do this we are going to use the <code><a href="http://dev.opera.com/libraries/fileio/docs/File.dml#resolve">resolve</a></code> function, which returns a <code>File</code> object for a given path.  It is important to note that you can resolve non-existent files.  To check if the <code>File</code> object that you resolved exists, you can check the <code><a href="http://dev.opera.com/libraries/fileio/docs/File.dml#exists">exists</a></code> property.</p>

<pre><code>var entries_dir = storage_dir.resolve(&#39;entries&#39;);</code></pre>

<p>As previously mentioned, we can check the <code>exists</code> property to see if the directory exists.  If it doesn&#39;t, we make a call to <code><a href="http://dev.opera.com/libraries/fileio/docs/File.dml#createDirectory">createDirectory</a></code> to create it.  The <code>createDirectory</code> function is very simple; it tries to create a directory with the name passed as the first argument.</p>

<pre><code>if(!entries_dir.exists)
    storage_dir.createDirectory(&#39;entries&#39;);</code></pre>

<p>Now that we have ensured there is a directory in existence to contain our entries, we can begin going through the files in the directory and loading them into the blog.  To do this we first need to call the <code><a href="http://dev.opera.com/libraries/fileio/docs/File.dml#refresh">refresh</a></code> function on the directory.  This is because <code>File</code> objects pointing to directories don&#39;t have their contents filled until this is called, and any changes made to the filesystem are not immediately present in the directory list until <code>refresh</code> is called.  Once we have refreshed the contents of the directory, we can loop through all of the items in the directory.</p>

<pre><code>entries_dir.refresh();
for(var i=0; i&lt;entries_dir.length; i++)
{</code></pre>

<p>We can get a <code>File</code> object of the entry we are currently looking at by accessing the directory like an array, at the index we are currently on.</p>

<pre><code>var entry = entries_dir[i];</code></pre>

<p>The next thing we need to do is determine where in the <code>entries</code> list we need to insert this entry.  If we just pushed the entry onto the list, any external links to the blog post could point to the wrong post if the files were loaded in a different order the next time the service was started.  One might think that since our filenames are all numbers, they would come out in some sort of order, so we wouldn&#39;t need to do this.  But this isn&#39;t the case; the order of files in a directory are seemingly random.  We can get the correct id by using the file&#39;s name, which we can get by accessing the <code><a href="http://dev.opera.com/libraries/fileio/docs/File.dml#name">name</a></code> property of a <code>File</code> object.  We use the <code>parseInt</code> function so that we can use this value later as an index into the entries array.</p>

<pre><code>var id = parseInt(entry.name);</code></pre>

<p>We can now read the contents of the file into the global <code>entries</code> structure.  As before in the <code>saveEntry</code> function we modified earlier, we just use the <code>open</code> function to get a filestream.  You will notice that we are passing <code>null</code> as the first argument, instead of the path as we did before.  When you pass <code>null</code> as the first argument, you are indicating that you want to open the file pointed to by the <code>File</code> object you are calling <code>open</code> on.</p>

<pre><code>var filestream = entry.open(null,&#39;r&#39;);</code></pre>

<p>Now that we have a valid filestream, we can use the read equivalents of the write functions we used earlier.  We can get an entry&#39;s title with a call to <code><a href="http://dev.opera.com/libraries/fileio/docs/FileStream.dml#readLine">readLine</a></code>, which as you probably guessed, reads in one line from the file.  We use the same function for getting the date from the second line.  For reading the content of the blog post itself (which could span multiple lines) we use a different function - <code><a href="http://dev.opera.com/libraries/fileio/docs/FileStream.dml#read">read</a></code> - which takes the number of characters to read as the first argument.  To read the rest of the file, we use the <code><a href="http://dev.opera.com/libraries/fileio/docs/FileStream.dml#bytesAvailable">bytesAvailable</a></code> property to indicate that we want to read the entire rest of the file.</p>

<pre><code>var title = filestream.readLine();
    var date = filestream.readLine();
    var text = filestream.read(filestream.bytesAvailable);</code></pre>

<p>Again, we close the file when we are done working with it.</p>

<pre><code>filestream.close();</code></pre>

<p>Now that we have all of the blog post content read, we can add it to the global <code>entries</code> variable.  To do this we simply index into the <code>entries</code> array and set it equal to a new object with the values we just read in.</p>

<pre><code>entries[id] = {
        &#39;title&#39; : title,
        &#39;text&#39;  : text,
        &#39;date&#39;  : date
    };
}// End for loop</code></pre>

<p>The loop repeats this for every file in the entries folder; at the end of this process we have our blog back, right where we left it when we stopped the service.

<h2 id="binarynote">A note about binary data</h2>

<p>If you need to read/write binary data to a file, you should use <code>ByteArray</code>s combined with the <code><a href="http://dev.opera.com/libraries/fileio/docs/FileStream.dml#readBytes">readBytes</a></code> /<code><a href="http://dev.opera.com/libraries/fileio/docs/FileStream.dml#writeBytes">writeBytes</a></code>function.  This is because the normal <code>write</code>/<code>writeLine</code> functions write the content according to a given character set, which by default is UTF-8. A quick example and explanation of how to do this follows:</p>

<pre><code>function writeBinary(file)
{
    var bytes = new ByteArray(2);
    // In UTF-8 these values would take two bytes each to write, resulting in 4 bytes
    // being written if you tried to write them using the standard functions.
    bytes[0] = 204;
    bytes[1] = 185;
    var filestream = file.open(null, &#39;w&#39;);
    filestream.writeBytes(bytes,2);
    filestream.close();
}</code></pre>

<p>This is a simple function that takes a <code>File</code> argument as its only argument, and writes two bytes to a file.  The constructor for a <code>ByteArray</code> takes one argument, the default length, though you can expand them just as you would normal arrays.  The <code>writeBytes</code> function takes two arguments, the <code>ByteArray</code> to write, and how many bytes you wish to write from the array.  The second argument can be omitted, in which case it will write the entire <code>ByteArray</code> to the file.  Reading bytes is pretty much the same, except <code>readBytes</code> takes a length to read as its only argument, and returns a <code>ByteArrray</code>.
</p>

<h2 id="moreinfo">Additional Information</h2>
<p>If you go through the API Documentation, you may notice some functions named <code>browseFor*</code>.  These functions <strong>do not</strong> work with Unite; you will not be able to use them.  The reason for this is that those functions can only be called as the result of a user&#39;s action, and with Opera Unite the user is unable to perform any actions directly.</p>
<p>The most useful link for learning more about functions not covered in this guide is the official API docs, found at <a href="http://dev.opera.com/libraries/fileio/">http://dev.opera.com/libraries/fileio/</a></p></p></p></p></p>
