Title: File I/O API
----
Date: 2008-05-15 13:17:56
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - No Derivs 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-nd/2.5/
----
Text:

<p>This document is the API Specification for File I/O API.</p>
<h4>Summary</h4>

<h3>File IO API</h3>

<p>This API document describes the JavaScript bindings for accessing
the local file system in Opera.</p>

<h4>The basics</h4>

<p>The File I/O API consists of three classes: <code>FileSystem</code>, <code>File</code> and <code>FileStream</code>.</p>

<p>The <code>FileSystem</code> class is initialized as a singleton, and is available as <code>opera.io.filesystem</code>.
This is a virtual file system. In order to actually use it, you&#39;ll need to add directories
from your actual file system as mount points to the virtual filesystem.</p>

<p>The <code>File</code> object works like similar objects in other frameworks. It can point to a directory,
archive or regular file. It exposes properties like <code>path</code>, <code>isDirectory</code>, <code>exists</code>, 
<code>parent</code>, etc. It also works as an array to let you access files and subdirectories in a directory.</p>

<p>The <code>FileStream</code> is used when you want to read from or write to the files in the filesystem.
It supports reading and writing text, images, binary data and Base64 text.</p>

<h4>Enabling File I/O</h4>

<p>In order to make the file system and its methods available, you need to add a <code>feature</code> element to your config.xml file like this:</p>

<pre><code>&lt;widget&gt;
  ...
  &lt;feature name=&quot;http://xmlns.opera.com/fileio&quot;&gt;
    &lt;param name=&quot;folderhint&quot; value=&quot;home&quot; /&gt;
  &lt;/feature&gt;
  ...
&lt;/widget&gt;</code></pre>

<p>The <code>folderhint</code> parameter is used in conjunction with the <a href="#shared">shared folder</a>. If the parameter is present, the user will be presented with a file dialogue that defaults to a directory corresponding to the value of the parameter. If multiple <code>folderhint</code> parameters are present, and the implementation supports only one shared folder, the last is used. If the parameter values do not correspond to a directory, the system will use its default starting location for the file dialogue.</p>

<p>If no <code>folderhint</code> parameter is present, no dialogue will be presented to the user and no shared folder will be available.</p>

<p>The following folder hints are recognized:</p>

<dl>
<dt>home</dt><dd>The user&#39;s default home directory, or other appropriate directory (My documents on Windows, /home/username/ on Linux, /Users/username/ on Mac)</dd>
<dt>pictures</dt><dd>The user&#39;s default pictures directory</dd>
<dt>music</dt><dd>The user&#39;s default music directory, such as /home/username/Documents/My Videos on Ubuntu)</dd>
<dt>video</dt><dd>The user&#39;s default video directory</dd>
<dt>documents</dt><dd>The user&#39;s default documents directory ( such as /home/username/Documents on Ubuntu)</dd>
<dt>downloads</dt><dd>If the user has a default downloads directory</dd>
<dt>desktop</dt><dd>The desktop, where applicable.</dd>
</dl>

<p>You may compress multiple <code>param</code> elements to <code>value=&quot;home music pictures&quot;</code>.</p>

<p><em>The following method is deprecated:</em> In order to make the file system and its methods available, you need to add a <code>file</code> attribute with the value <code>yes</code> to the <code>widget</code> element in the config.xml file of your widget or service.</p>

<h4>Mount points</h4>

<p>Instead of accessing the file system directly, this API uses a concept of mount points. In order to access 
parts of a disk, it must first be mounted as a mount point in a virtual filesystem. There are two types of mount points:</p>

<ul>
  <li>Predefined <strong>system mount points</strong> activated by the <a href="http://dev.opera.com/libraries/fileio/docs/opera.io.filesystem.dml#mountSystemDirectory">opera.io.filesystem.mountSystemDirectory()</a> method.</li>
  <li><strong>General mount points</strong> created from anywhere on the user&#39;s disk, using the <a href="http://dev.opera.com/libraries/fileio/docs/opera.io.filesystem.dml#browseForDirectory">opera.io.filesystem.browseForDirectory()</a> and <a href="http://dev.opera.com/libraries/fileio/docs/opera.io.filesystem.dml#browseForFile">opera.io.filesystem.browseForFile()</a> methods.</li>
</ul>

<h5>System mountpoints: the application, storage and shared directories</h5>

<p>There are three special directories you can use with the File I/O API:</p>

<ul>
  <li>The <strong>application</strong> directory, which contains the actual files in the application accessing the 
file system. If the application is a widget, this directory will contain all the files in the widget, like config.xml, 
index.html and others. This directory is always mounted as readonly.</li>
  <li>The private <strong>storage</strong> directory, which can be used to save temporary files and configuration 
information specific to the application. The files stored in this directory persist until the application is uninstalled.</li>
  <li id="shared">The private <strong>shared</strong> directory, which can be used to share and store files. This directory is typically chosen by the user when installing the application, and is accessible to the user in the normal file system. One example of use is sharing a set of images from somewhere on the user&#39;s disk.</li>
</ul>

<p>These are not available by default and need to be mounted using the <a href="http://dev.opera.com/libraries/fileio/docs/opera.io.filesystem.dml#mountSystemDirectory">opera.io.filesystem.mountSystemDirectory()</a>.
method:</p>

<pre><code>opera.io.filesystem.mountSystemDirectory(&#39;shared&#39;);
opera.io.filesystem.mountSystemDirectory(&#39;storage&#39;,&#39;myCoolSaves&#39;);</code></pre>

<p>Once mounted, they become available under in the <code>opera.io.filesystem.mountPoints</code> property.</p>

<p>You may specify an optional name to mount these directories as. If not supplied, it defaults to <code>application</code>, <code>storage</code> and <code>shared</code> respectively.</p>

<p>In the example above shared directory will be mounted as <code>shared</code> and have a path <code>/shared</code>,
while storage will be mounted as <code>myCoolSaves</code> and have a path <code>/myCoolSaves</code>.</p>

<p>These can then be accessed as regular mount points and through the mountpoint URL protocol as other mounted files, except that the <code>application</code> directory is mounted as read-only.</p>

<p class="warning" style="color: red">WARNING: The <code>shared</code> directory will be read-write, unless the underlying 
file system defines it to be read-only. Be careful to protect your data by controlling how data gets written to it. You 
should supply some sort of authentication of users who access data in this folder and be careful to not leave code open to exploitation.</p>

<h5>Creating your own mount points</h5>

<p class="note">Note: Creating mount points with the <code>browseFor*</code> methods is not supported in Opera Unite services. It should be possible for Opera Widgets. Mounting system mount points should work in both cases.</p>

<p>It is possible to create your own mount points from any directory on the user&#39;s disk, using the <a href="http://dev.opera.com/libraries/fileio/docs/opera.io.filesystem.dml#browseForDirectory">opera.io.filesystem.browseForDirectory()</a>, <a href="http://dev.opera.com/libraries/fileio/docs/opera.io.filesystem.dml#browseForFile">opera.io.filesystem.browseForFile()</a> and <a href="http://dev.opera.com/libraries/fileio/docs/opera.io.filesystem.dml#browseForSave">opera.io.filesystem.browseForSave()</a> methods.</p>

<p>These functions will open a file dialog, and let the user choose a file to share. The
selected file is returned as an argument to a callback function. If the user cancels the
dialog, or the selected file is somehow invalid, the callback function is called with
null.</p>

<p class="warning" style="color: red">WARNING: Once mounted, the mount point will be read-write unless the 
underlying file system defines it to be read-only. Be careful to protect your data by controlling how data
gets written to them. You should supply some sort of authentication of users who access these directories 
and be careful to not leave code open to exploitation.</p>

<p>The following is an example using <code>browseForDirectory()</code>, which is the most common case:</p>
 
<pre><code>opera.io.filesystem.browseForDirectory( &#39;share&#39;, &#39;&#39;, processDir ); //Let the user choose a directory
function processDir( dir )
{
    if ( ! dir )
    {
        return; //Invalid file or canceled dialog
    }
    opera.postError(dir.path);
}</code></pre>
 
<p>In this case, &#39;share&#39;; becomes the name of the directory in the virtual file system. The <code>processDir</code> function is called with the file the user selects.</p>

<p>Mount points become available in the <code>opera.io.filesystem.mountPoints</code> property. This object is a <code>File</code> 
object.</p>

<h5>The mountpoint URL protocol</h5>

<p>In some cases, you want your application to be able to reference files
that have been mounted in the virtual file system from a Web page. You can use the mountpoint URL protocol
for this purpose. A mountpoint URL starts with <code>mountpoint://</code>, followed by the name of a mount point
and a path to a file under that mount point.</p>

<p>For example, if a user has added a mount point, and named it <code>myImages</code> using the call:</p>

<pre><code>browseForDirectory(&quot;myImages&quot;,&quot;&quot;,callback_function);</code></pre>

<p>the user can access files inside the mount point by creating an absolute URI:</p>

<pre><code>&lt;img src=&quot;mountpoint://myImages/avatar.png&quot;&gt;</code></pre>

<h4>Paths</h4>

<p>Note that the path separator is always <code>&#39;/&#39;</code>, regardless of the underlying file system.</p>

<p>The <code>fileSystem.mountPoints</code> property represents the root of the file system and has the path <code>&#39;/&#39;</code>.</p>

<p>A mount point mounted with the name foo has the path <code>&#39;/foo&#39;</code>.</p>

<p>All files belong to only one mount point, so if a directory mounted as <code>&#39;foo&#39;</code> has a file called 
<code>&#39;bar&#39;</code>, the path of the file is <code>&#39;/foo/bar&#39;</code>.</p>

<p>Paths that begin with <code>&#39;/&#39;</code> are absolute paths, starting from the root and moving down through a 
mount point, through any subdirectories and potentially to a file.</p>

<p>You may use relative paths. Any path not starting with a &#39;/&#39; is a relative path. The &#39;.&#39; and &#39;..&#39; directory references
are supported. Paths are relative to the current directory. If <code>file</code> is a regular file, and you call 
<code>file.moveTo(&#39;some/path&#39;)</code> or similar methods, the path is relative to the parent directory of <code>file</code>. 
If <code>file</code> is a directory, the path is relative to that directory.</p>

<h4>Working with files</h4>

<p>You obtain an initial file by adding a mount point as described earlier. From here you have two options:</p>

<p>If the mount point is a directory, you can move into its content as described in the next section.</p>

<p>You can use the <code>resolve()</code> method on the initial <code>File</code> object to get a reference to a File
somewhere under the mount point. This method takes a path as an argument and will attempt to resolve it. If
the path is valid, an <code>File</code> object is returned. Note that the file does not need to exist; the path simply needs to be a possible valid path.</p>

<pre><code>var file = mp.resolve(&#39;path/to/my/file&#39;);</code></pre>

<p>Note that the path separator is always &#39;/&#39;, regardless of the underlying file system.</p>

<p>Some important properties of the <code>File</code> object:</p>

<dl>
<dt>exists</dt><dd>Check if the file referenced by this <code>File</code> object actually exists. Especially useful when using the <code>resolve()</code> method.</dd>
<dt>isFile</dt><dd>If the <code>File</code> object references a regular file.</dd>
<dt>isDirectory</dt><dd>If the <code>File</code> object references a directory.</dd>
<dt>created</dt><dd>When the file was created.</dd>
<dt>modified</dt><dd>When the file was last modified.</dd>
<dt>path</dt><dd>The path to this file in the virtual file system, starting with &#39;/&#39; and the name of the mount point.</dd>
</dl>

<p>You may copy and move files by using the <code>copy</code> and <code>moveTo</code> methods:</p>

<pre><code>file.copyTo(&#39;path/to/copy&#39;);
file.moveTo(&#39;new/name/of/file&#39;);</code></pre>

<p>Both methods take an optional argument <code>overwrite</code>, which will cause any existing files with the new path to be overwritten.</p>

<p>To create a new directory, use the following syntax:</p>

<pre><code>var file = mountPoint.createDirectory(somePath);
var file = mountPoint.createDirectory(mountPoint.resolve(somePath));</code></pre>

<p>In order to write files, you need to open a <code>FileStream</code> to the file and write to it. See the section on <a href="#stream">working with streams</a>.</p>

<p>To delete files or directories, use the <code>deleteFile()</code> or <code>deleteDirectory()</code> methods:</p>

<pre><code>mp.deleteFile(&#39;path/to/file&#39;);
mp.deleteDirectory(&#39;path/to/directory&#39;, true);</code></pre>

<p>Both methods may take a <code>File</code> object instead of a path. The second argument is to delete content recursively</p>

<h4>Working with directories</h4>

<p>A <code>File</code> object made from a directory points to its subdirectories and contained files.
The <code>File</code> object supports a <code>length</code> property and an array-like syntax to access these subfiles.
Note that the subfiles and directories need to be &#39;refreshed&#39; before you can actually access
them. Through this process, information about the files in the directory are loaded into the virtual
filesystem. The method <code>refresh()</code> is used for this purpose:</p>

<pre><code>dir.refresh(); //Load the contents of the directory
for ( var i = 0, file; file = dir[i]; i++ )
{
    opera.postError(file.path + &#39; &#39; + file.isDirectory + &#39; &#39; file.isFile);
}</code></pre>

<p>When the file is a directory, its <code>length</code> property will tell you how many files and subdirectories there are in the directory.</p>

<p>It&#39;s important to note that information about the subfiles and directories of this directory is
<strong>not live</strong>. If files are added, moved or deleted, you need to call <code>refresh()</code> again to update
the information in the <code>File</code> object.</p>

<p>You can similarly recurse through the file structure.</p>

<h4 id="stream">Reading and writing: Working with files streams</h4>

<p>In order to read or write to a file, you need to make a <code>File</code> object and then open it for reading or writing 
using the <code>open</code> method:</p>

<pre><code>var stream = dir.open(&#39;newfile&#39;, opera.io.filemode.WRITE);
stream.writeLine(&#39;hello&#39;);
stream.close();
stream = dir.open(&#39;newfile&#39;);
var data = stream.readLine();
opera.postError(data);</code></pre>

<p>Using <code>opera.io.filemode.WRITE</code> will overwrite all data in the file. Use <code>opera.io.filemode.APPEND</code> to append data instead. If the file does not exist, it is immediately created when opened in either of these modes.</p>

<p>The following modes are supported:</p>

<dl>
<dt>READ</dt>
<dd>Open the file for reading. If the file doesn&#39;t exist, throw an exception.</dd>
<dt>WRITE</dt>
<dd>Open the file for writing. This will delete everything in the file first. If the file doesn&#39;t exist, it is created.</dd>
<dt>APPEND</dt>
<dd>Open the file appending. This will write data at the end of the file. If the file doesn&#39;t exist, it is created.</dd>
<dt>UPDATE</dt>
<dd>Open the file for reading and writing. If the file doesn&#39;t exist, throw an exception.</dd>
</dl>

<p>The modes can be combined using a bitwise OR: <code>( READ | WRITE )</code>.</p>

<p>You may write characters, lines, Base64-encoded text and images to the stream, using the different <code>writeX()</code> methods of the <code>FileStream</code> object.</p>
  

