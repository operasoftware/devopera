Title: Gridnite part 3: saving and restoring multiple spreadsheets
----
Date: 2010-01-14 14:54:36
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

<p>Our Gridnite collaborative spreadsheet application is coming along well — in the last two articles we did the following: <a href="http://dev.opera.com/articles/view/gridnite-unite-powered-spreadsheet/">Part 1: implementing the basic spreadsheet functionality</a>, <a href="http://dev.opera.com/articles/view/unite-spreadsheet-part-2-formulas/">Part 2: adding formulas</a>. Our next big steps in developing the application are the development of routines to work with files, namely saving and restoring spreadsheets and exporting them to some common spreadsheet format. Currently Gridnite works in a single file, <code>spreadsheet.json</code>, which is loaded via <code>JSON_file</code> to the <code>db</code> variable. This means that we can’t really work on separate files right now — if we were to implement downloading/uploading right away, we would replace the <code>spreadsheet.json</code> file with new contents upon restoring, and everyone who collaborated with us would have all their work destroyed (the contents would be replaced with what was just uploaded).</p>

<p>Lucky for us, there isn’t that much to change to achieve the desired effect. In this article we’ll show you how to implement the save/restore functionality, and do some general refactoring to keep the application more maintainable. The most up-to-date Gridnite application looks like Figure 1.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/309-gridnite-part-3-saving-and-restoring-multiple-spreadsheets/gridnite1_small.png" alt="" />
<p class="comment">Figure 1: Gridnite 1.2 with multiple spreadsheet functionality.</p>

<p class="note">You can <a href="http://dev.opera.com/articles/view/gridnite-part-3-saving-and-restoring-multiple-spreadsheets/gridnite.v1.2.zip">download the third version of the Gridnite application</a>, try it out, and play with the code as you read the article. </p>


<p>Contents:</p>

<ul>
  <li><a href="#refactoring">Refactoring</a></li>
  <li><a href="#multiplefiles">Multiple files</a>
    <ul>
      <li><a href="#changingdb">Changing db to db_handles(filename)</a></li>
      <li><a href="#security">Security</a></li>
      <li><a href="#addingmenu">Adding a feature menu</a></li>
      <li><a href="#impromptu">Dialog boxes and Impromptu</a></li>
      <li><a href="#switchingtosaved">Switching to a saved file</a></li>
      <li><a href="#utf8">UTF-8</a></li>
      <li><a href="#aa1cells">AA1 cells</a></li>
      <li><a href="#summary">Summary</a></li>
    </ul>
  </li>
</ul>

<h2 id="refactoring">Refactoring</h2>

<p>The code is growing bigger. To begin with it was okay to keep it in <code>index.html</code>, but it’s starting to becoming unmanageable. There are large parts of the code that are currently stable and don’t require any changes at all, but they are getting in the way of some of the dynamically changing parts. It therefore makes sense for us to split this big file into smaller ones at this point.</p>

<p>We’ve cut out parts of the <code>index.html</code> file that are related to basic things developed in <a href="http://dev.opera.com/articles/view/gridnite-unite-powered-spreadsheet/">Part 1: implementing the basic spreadsheet functionality</a> and moved them to <code>/js/clientside_base.js</code>. The parts that are related to formula editing have been moved to <code>/js/clientside_formula.js</code>. These parts are now called into the main document using <code>&lt;script src={{base}}js/clientside_base.js&gt;&lt;/script&gt;</code> calls.</p>

<p>The code is now much cleaner and easier to understand. There are 3 <code>&lt;SCRIPT&gt;</code> calls, which is ok for now, although in the future we would like to create a procedure to join all those files together and have them sent to the client’s browser as a single JavaScript file. This would improve things because each call takes time (latency) and it can become quite annoying to wait for all those scripts to load.</p>

<p>Why didn’t we split the script into smaller parts from beginning? Well, remember the KISS principle —  <q>Keep it simple, stupid</q>. Splitting a file with less than 100 lines of code would have been unnecessarily complicated.</p> 

<p>The only JavaScript left inside the <code>index.html</code> file is as follows:</p>

<pre><code>var current_page__ =
{{current_page}};
var uri_base = {{base}};
var current_time =
{{current_time}};
var time_difference = (new
Date()).getTime()/1000 - {{current_time}};</code></pre>

<p>The templating codes —  eg {{...}} —  are provided by the <a href="http://dev.opera.com/articles/view/markuper-unite-template-library/">Markuper library</a>, so these are tied to <code>index.html</code> (the only file parsed by Markuper). We also had to update the Markuper call to include <code>current_page: safe_js_val(current_page(r)),</code> as a substitution variable (more on this below).</p>

<h2 id="multiplefiles">Multiple files</h2>

<p>Let’s start with some planning. While working on <a href="http://dev.opera.com/articles/view/gridnite-unite-powered-spreadsheet/">Gridnite Part 1: implementing the basic spreadsheet functionality</a> we thought that at some point we would need the system to work on different files, so we even reserved a variable — <code>current_page</code> — for this. The original plan was to use <a href="http://plugins.jquery.com/project/cookie">jQuery’s Cookie plugin</a> and store the filename currently open by the visitor (client) in a cookie. We implemented this but then realized users might want to have a few windows open with a different spreadsheet in each one (like you can have multiple spreadsheets open in any other similar application). But the cookie meant that there could be only one document open at a time, so another approach was needed.</p>

<p>In actual fact, it is worse than this. If you use this approach and then open another document in a different window, the cookie is updated and you end up with updates sent from Spreadsheet 2 to Spreadsheet 1, which is confusing and just plain wrong.</p>

<p class="note">Just in case you’re wondering how to deal with Cookies in Opera Unite, you can <a href="http://unitehowto.com/Cookies">modify jQuery’s Cookie plugin</a> easily to deal with Opera Unite’s infrastructure.</p>

<p>So, the correct approach to deal with this is to send the relevant JSON filename in each of the AJAX requests to the server, and in the initial request too:</p>

<pre><code><a href="opera:illegal-url-6" target="_blank">http://.../ajax_request?param=value&amp;filename=file1.json</a></code></pre>

<p>The next question is <q>how are we going to deal with the fact that we have only one db variable (ie one file to store the data)?</q>. The answer is that we’re going to replace the <code>db</code> variable with the <code>db_handles(filename)</code> call; this returns the handle of the file(caching it for each successive call).</p>

<h3 id="changingdb">Changing db to db_handles(filename)</h3>

<p>Previously we had this call:</p>

<pre><code>db = new JSON_FILE(&#39;spreadsheet.json&#39;, {
  values:{ },
  updates:[],
});</code></pre>

<p>This served us well for one file (<code>spreadsheet.json</code>), but as noted above we’re going to replace it with the <code>db_handles(filename)</code> call so that we can handle any number of files. We could do it as simply as this:</p>

<pre><code>function
db_handles(filename) {
  return new JSON_FILE(filename, {
    values:{ },
    updates:[],
  });
};</code></pre>

<p>But to make it play nicely with a filesystem we’re going to cache the file handle returned by <code>JSON_FILE</code> for successive calls:</p>

<pre><code>db_handles = {};
function
db_handle(db_name) {
  if(!db_handles[db_name])
  {
    db_handles[db_name] = new JSON_FILE(db_name, {
      values:{  },
      updates:[  ],
    });
  };
  return
  db_handles[db_name];
};</code></pre>

<p>This avoids creating a multitude of open files, which would probably be dealt with by JavaScript’s garbage collector, but nevertheless it’s more efficient to not have to open a file for every action.</p>

<p>Now we need to search through all our files for calls to the <code>db</code> variable (usually called via <code>db.store</code>) and replace them with <code>db(filename).store</code>. But what is the <code>filename</code>?

It’s the GET variable we talked about earlier that we’re going to send in each AJAX request. We could just use <code>db_handles(r.GET.filename)</code> call (<code>r.GET</code> is the <a href="http://unitehowto.com/uniteness">Uniteness framework</a> shortcut for <code>r.connection.request.queryItems[&#39;filename&#39;][0]</code>), but we’re going to have this in a lot of places. What if we need to change it later? Since we’re not sure that we will always use the GET variable (<code>?filename=...</code>) to deliver the filename, it’s a good idea to create a function that will be called in each <code>db_handles(...)</code> call, instead of hard-writing <code>r.GET.filename</code> every time. Let’s call this function <code>current_page()</code>:</p>

<pre><code>function
current_page(r) {
  return
  UTF8.decode( r.GET.filename ? r.GET.filename : &#39;spreadsheet.json&#39; );
};</code></pre>

<p>So, if we have a <code>filename</code> variable we return it, otherwise we return the default <code>spreadsheet.json</code> file. The <code>r</code> varible holds the <code>WebServerRequestEvent</code> object (we’ll talk more about UTF-8 decoding in a little while).</p>

<p>Next we look though our <code>.js</code> files, replace <code>db.store</code> with <code>db_handles(current_page(r)).store</code>, and we’re done with this part of the code modification.</p>

<p>The last thing to do in this section is to modify the AJAX calls to include the filename. Remember that we have two types of AJAX calls — one is for setting the cell value and the other (done every 5 seconds) is to retrieve the latest updates made to the spreadsheet by other users. So, we just need to add <code>+&#39;&amp;filename=&#39;+encodeURIComponent(current_page())</code> to each call. We haven’t written the <code>current_page()</code> function yet — this is executed in the user’s browser, not as server-side Opera Unite JavaScript). This function is really simple:</p>

<pre><code>function current_page(page) {
  return current_page__;
};</code></pre>

<p>If we need to change where <code>current_page</code> is stored later on, this function allows us to just change it in one place.</p>

<h3 id="security">Security</h3>

<p>Remember that you should never trust data supplied by any user. What if they supply us with a filename like <code>`cat /etc/passwd`</code> on Linux or <code>c:\windows\hosts</code> on Windows (or some other malicious files or commands?) Luckily for us, Opera Unite’s sandboxing of the filesystem is done really well, so it is hard to insert malicious code into our applications. Ideally we should check what the user supplied to us and limit it, but Opera have done a great job, so we don’t really need to do that. We just pass the filename as it was sent to Opera Unite’s JavaScript.</p>

<h3 id="addingmenu">Adding a feature menu</h3>

<p>We also need to add a menu to allow our users to access functions such as <em>New Spreadsheet</em> and <em>Switch to other Spreadsheet</em>. Right now those will just be two links (keep it simple!), but at some point in future, when the menu grows big enough, we’ll refactor the code again and add proper drop-down menus (similar to the Opera 10 <a href="http://dev.opera.com/articles/view/the-opera-10-experience/#operatingsystem">Operating system UI showcase</a>).</p>

<p>Now we’re going to add a simple <code>&lt;DIV CLASS=menu_items&gt;</code> to <code>index.html</code> to hold the menu and then use jQuery to add the menu items.</p>

<pre><code>$(document).ready(function()
{
  $(&#39;&lt;span&gt;File:
  &lt;b id=filename&gt;&lt;a href=#
  onClick=files_switch(); return false;&gt;&#39;
  +current_page()+ &#39;&lt;/a&gt;&lt;/strong&gt;&lt;/span&gt; | &#39; +
  &#39;&lt;a href=#
  onClick=files_new(); return false;&gt;New spreadsheet&lt;/a&gt;
  &#39; +
  &#39;&lt;a href=#
  onClick=files_switch(); return false;&gt;Switch to
  another file&lt;/a&gt; &#39; +
  &#39;&#39;).appendTo(&#39;.menu_items&#39;);
});</code></pre>

<p>This creates a <code>status</code> line containing the current open file and two links to functions that display dialogs. Clicking on the file name has the same effect as clicking the <code>Switch to another file</code> link. That’s just a little usability quirk. The user might be thinking <q>Is this where I enter the filename I want?</q> or <q>Where’s the button to open another file?</q>. Since it’s only 20 more characters to type for us, it is a no-brainer to add this.</p>

<p>Next we want to create the dialog boxes containing the controls for the functions accessed by clicking the two links mentioned above. We could just create a pop-up. I know, I know … I’m just joking. Pop-ups are annoying and blocked by most browsers. But we do need a dialog nevertheless. We’ll use the awesome <a href="http://plugins.jquery.com/project/impromptu">Impromptu plugin for jQuery</a>.</p>

<h3 id="impromptu">Dialog boxes and Impromptu</h3>

<p>Impromptu is a really great piece of software for creating dialogs. You just supply HTML, some callbacks and few parameters, and it creates a nice-looking dialog box that even plays well with other jQuery plugins. It’s as simple as <code>$.prompt(&#39;Have a nice &lt;strong&gt;day&lt;/strong&gt;!&#39;)</code>.</p>

<p>Let’s start with a <code>New File</code> dialog. It’s going to be a simple imitation of the <code>prompt(...)</code> call that sends the user to a new location when OK is clicked:

<code>http://.../gridnite/?filename=<em>new_file_name</em></code>).

We could use the usual <code>prompt(...)</code>, but we would need to have other complex dialog boxes as well and it’s a good idea to keep the interface consistent, therefore we’re going to deliberately over-complicate things and use Impromptu for this too.</p>

<pre><code>$.prompt (
  &#39;New file
  name:&lt;br&gt;&lt;input type=text id=alertName
  value=&gt;&#39;, {
    submit: cb,
    buttons: {
      Ok:true
    },
    persistent: false
  }
);
$(&#39;#alertName&#39;).focus();</code></pre>

<p><code>submit: cb</code> is a callback to the <code>cb(v,m,f)</code> function (more details below), <code>persistent: false</code> means that the user can click anywhere around the dialog box to make it go away, and the very last line gives the text-field focus, to aid with keyboard accessibility.</p>

<p>If the user clicks <code>OK</code>, the <code>cb</code> function is called:</p>

<pre><code>function cb(v,m,f) {
  an =
  m.children(&#39;#alertName&#39;);
  if(!an.attr(&#39;value&#39;)) {
    an.css(border, solid
    #ff0000 1px);
    return false;
  };
  var fn =
  an.attr(&#39;value&#39;);
  if(!fn.match(/\./))
  {
    fn += &#39;.json&#39;;
  };
  switch_page(fn);
  return true;
};</code></pre>

<p>This is just basic jQuery stuff — we get a reference to the element with the ID of <code>alertName</code> — <code>&lt;INPUT&gt;</code>. Then we check if it contains a value — if not we put a red border around it and don’t close the dialog (using <code>return false</code>). We check the value for <code>.</code> (dot) symbol and if it has no value we add <code>.json</code> to the end. Then we call <code>switch_page(...)</code> with the filename we just specified as its argument.</p> 

<pre><code>function switch_page(page) {
  document.location =
  uri_base + &#39;?filename=&#39;+encodeURIComponent(page);
};</code></pre>

<h3 id="switchingtosaved">Switching to a saved file</h3>

<p>This requires a <code>server-side</code> component. The <code>client-side</code> is fairly simple:</p>

<pre><code>function files_switch() {
  $.getJSON(uri_base
  + &#39;list_files?json=1&#39;, function(files_list) {
    files_list_html =
    &#39;&#39;;
    for(var i=0;
    i&lt;files_list.length; i++) {
      files_list_html
      += &#39;&lt;a href=# onClick=switch_page(this.text); return
      false;&gt;&#39; + files_list + &#39;&lt;/a&gt;&#39;;
    };

    $.prompt(
      &#39;Open
      file:&lt;br&gt;&lt;div class=file_list&gt;&#39; + files_list_html +
      &#39;&lt;/div&gt;&#39;,
      {
        buttons:
        {
          Ok:true, Cancel:false
        },
        persistent: false
      }
    );
  });
};</code></pre>

<p>We use an AJAX request to <code>http://..../gridnite/list_file?json=1</code> to return the list of spreadsheet files on server as a JSON object (<code>array</code> in this case). Then we just create a list of links to those files with <code>onClick=switch_page(this.text); return false;</code>. To make it nicer and more OS-like, we’re going to add icons to links from the great <a href="http://www.famfamfam.com/lab/icons/">FamFamFam Silk collection</a>.</p>

<p>The server-side is a little more complicated. To iterate through the spreadsheet files on the server and return them as a JSON object, we do this:</p>

<pre><code>function glob(dir_name) {
  try { 
    var dir =
    opera.io.filesystem.mountSystemDirectory(dir_name);
    var ret = [];
    dir.refresh();
    //Load the contents of the directory
    for(var
    i=0,file;file=dir;i++) {
      if(file.isFile) {
        ret.push(file.path.replace(/^\/[^\/]*?\//, &#39;&#39;));
      };
    };
    return ret;
  }

  catch(err) {
    return [];
  };
};

function list_files(r) {
r.write(JSON.stringify(glob(&#39;storage&#39;)));
};</code></pre>

<p>The <code>glob</code> function is a modification of an example from the <a href="http://dev.opera.com/libraries/fileio/"><code>fileio</code></a> documentation. We open the directory and iterate through it, pushing elements to the array, replacing <code>/storage/</code> or whatever the directory is from  the filename, then returning the array. Then we JSONify it and return it to the user, where the Impromptu-generated dialog is shown.</p>

<h3 id="utf8">UTF-8</h3>

<div class="note">

<p>Being Russian, I tested Gridnite for international characters, and it didn’t work well. The <code>escapeURIComponent</code> function worked well, but Opera Unite received UTF-8 characters and treated them as <code>Latin-1</code> or something like that. I searched for a UTF-8 library for JavaScript and found a nice one at WebToolKit (<a href="http://www.webtoolkit.info/">http://www.webtoolkit.info/</a>). You just call <code>UTF8.encode(...)</code> or <code>UTF8.decode(...)</code> and voila!</p>

<p>There are quite a few places where those decoding and encoding functions are used, worked out in a bit of a trial-and-error fashion. It was a bit of  hassle to implement, but Gridnite now plays well with international characters both in cells and filenames.</p>

</div>

<h3 id="aa1cells">AA1 cells</h3>

<p>Another problem that we decided to deal with straight away was the small number of rows in Gridnite — at some point we’re going to make it dynamically extensible, but for now we’ve just added more of them. There was a hidden problem with it however — while all of <a href="http://dev.opera.com/articles/view/unite-spreadsheet-part-2-formulas/">Part 2: adding formulas</a>’s regular expressions expected cell names such as <code>A1</code> or <code>B34</code>, none of them expected <code>AA1</code>. So we’ve had to modify the regexps from the <code>clientside_formula</code> function from <code>[A-Z][0-9]{2,3}</code> to <code>[A-Z]{1,2}[0-9]{2,3}</code>.</p>

<h2 id="summary">Summary</h2>

<p>This rounds up our tour of the third lot of new functionality to be added to Gridnite — saving and restoring multiple files. We hope you have found it useful and interesting.</p>
            
