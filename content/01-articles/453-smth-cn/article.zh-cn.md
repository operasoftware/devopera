Title: 如何建立一个快速拨号扩展插件
----
Date: 2011-05-04 14:19:07
----
Lang: zh-cn
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-No Derivative Works 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-nd/3.0/
----
Text:

<h2>介绍</h2>

<p>2007年我们给大家带来了<a href="http://www.opera.com/docs/changelogs/windows/920/">快速拨号</a>。之后其他浏览器也陆续推出了这个功能。身为第一个推出快速拨号的浏览器，我们有义务继续提升这个功能。在Opera11.10版本，我们给快速拨号优化了显示和用户体验。同时也给<a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/">程序员提供控制快速拨号网页的功能</a>。在Opera11.50，我们推出了快速拨号插件。

程序员提供控制


<p>Opera 浏览器已经支持数百个扩展。现在，除了网页和图标截图可以显示扩展插件的内容，快速拨号也可以显示扩展插件的内容，而且是实况的抓取。这个教材教你如何去实现。</p>

<p class="note">注：这个教材需要你<a href="http://www.opera.com/browser/next/">下载 Opera 11.50</a> 和一个快速拨号扩展插件。推荐 <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">下载时钟扩展插件</a>。</p>

<h2>基本</h2>

<p>为了统一性，快速拨号扩展插件使用了相似的格式和结构。换句话，在添加一些简单的额外代码后，<code>config.xml</code> 文档可以将一个普通 Opera 扩展插件，转换成一个快速拨号扩展插件。</p>

<ul>
	<li><code>&lt;feature&gt;</code> 标签的 <code>name</code> 属性值为<code>opera:speeddial</code>时，把一个普通扩展插件变成一个快速拨号插件。</li>
	<li><code>&lt;widget&gt;</code>里的 <code>viewmodes</code> 属性值为<code>minimized</code>：，这会将内容的背景网页显示在快速拨号的框里。</li>
</ul>

<p>需要注意的是，插件还未能同时使用快速拨号和浏览器工具栏。换句话，插件要么出现在快速拨号，要么在工具栏按钮。</p>

<h2>用 <code>config.xml</code> 定义快速拨号扩张插件</h2>

<p>一起实践。先下载快速拨号闹钟扩张插件，然后看看源代码。图 1 显示完成的扩张插件。</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/453-/clock_extension_in_speed-dial.jpg" width="400" height="242" alt="在 Opera 浏览器的快速拨号安装了闹钟扩展插件" /></p>
<p class="comment">图 1：在 Opera 浏览器安装了的闹钟扩展插件。</p>

<p>普通快速拨号框会显示一个网页的截图，快速拨号扩张插件则显示首页还是背景。这是默认的 index.html。要启,我们首先添加<code>viewmodes</code>属性到 <code>config.xml</code> 的 <code>&lt;widget&gt;</code> 标签，价值是 <code>minimized</code>:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; viewmodes=&quot;minimized&quot;&gt;</code></pre>

<p>这告诉浏览器以缩小格式显示插件的背景网页。每一个快速拨号框的 100％ 缩放级别是 256 x 160 像素。同时，我们也需要添加一个 <code>feature</code> 标签和他的 <code>required</code> 属性，还有一个 <code>param</code> 标签。</p>

<pre><code>&lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
  &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
&lt;/feature&gt;</code></pre>

<p><code>feature</code> 标签的 <code>required</code> 屬性其实是告诉浏览器你的扩展插件是否需要有快速拨号支持才可以运行。打个比方你的插件或许在其他浏览器上也兼容，不过这些浏览器缺没有快速拨号。如果你的插件需要快速拨号，那你的 <code>required</code> 属性就是<code>true</code> 值，不然就是 <code>false</code> 值。</p>

<p>The <code>param</code>是必须的标签。标签告诉快速拨号哪个网站在插件被点击后应该打开。</p>

<p>以下是闹钟插件的 config.xml。</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; defaultlocale=&quot;en&quot; viewmodes=&quot;minimized&quot;&gt;
  &lt;name short=&quot;Simple Clock&quot;&gt;Clock Speed Dial Extension&lt;/name&gt;
  &lt;description&gt;This is an example Speed Dial extension showing a simple clock.&lt;/description&gt;
  &lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel Davis&lt;/author&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt; &lt;!-- Icon source: http://www.openclipart.org/detail/17552 --&gt;
  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
  &lt;/feature&gt;&gt;
&lt;/widget&gt;</code></pre>

<h2>给插件添加内容</h2>

<p>下一步是给快速拨号框添加内容。这个其实就是快速拨号的背景网页，<code>index.html</code>。<code>index.html</code>会和<code>config.xml</code>同一级目录.我们来建立一个JavaScript数码闹钟。首先，我们先建立一个<code>index.html</code>，里面有一个悬空的<code>output</code>标签。</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
    &lt;title&gt;Clock Speed Dial Extension&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;output&gt;&lt;/output&gt;
    &lt;script src=&quot;scripts/background.js&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>接着，我们建立一个脚本目录，里面有我们连到的 <code>background.js</code>。脚本内容如下。</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ? &#39;0&#39; + time : time;
  }
    
  var output = document.querySelector(&#39;output&#39;);
  var date, hours, mins, secs;
    
  // Get and display the current time every 500 milliseconds
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + formatTime(secs);
  }, 500); // Twice a second to allow for slight delays in JavaScript execution
}, false);</code></pre>

<p>CSS也非常简单，其中多了一个小窍门。</p>

<pre><code>* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

/* Use display:table and display:table-cell
so that we can use vertical-align:middle */
body {
  background: #444;
  color: #fff;
  display: table;
  height: 100%;
  width: 100%;
}
output {
  display: table-cell;
  font-family: monospace;
  font-size: 10em;
  text-align: center;
  text-shadow: 0 0.1em 0.1em #000;
  vertical-align: middle;
}

/* Styles here are only applied in a &quot;minimized&quot; state */
@media screen and (view-mode: minimized) {
  output {
    font-size: 1.8em;
  }
}</code></pre>

<p>如你所见，CSS里边有一个CSS3 media query，这是用来检查<code>view-mode: minimized</code>，也就是缩小的状况。换句话，这个样式只会在缩小的情况下看得见。media query 可以在不同的情况下给予不同的CSS设计，却不不需维护多个CSS。</p>

<h2>最后一步</h2>

<p>把所有的文件压缩之后，命名为 .oex。这是 Opera 插件的格式（注意不要把目录也压缩）。你可以clock_SD_extension.oex解包看看内容（把.oex 转换为.zip后解包）。</p>

<h2><code>SpeedDialContext</code> API</h2>

<p>安装以后，扩展插件可以用SpeedDialContext API对快速拨号框做修饰。这个API异常简单。有<code>title</code> 和 <code>url</code>属性。她们通过 <code>opera.contexts.speeddial</code> 对象被解读出来。</p>

<pre><code>if (opera.contexts.speeddial) {
  var sd = opera.contexts.speeddial; 
  sd.title = &quot;My title&quot;;
  sd.url = &quot;mypage.html&quot;; 
}</code></pre>

<p>通过 <code>background.js</code> 我们可以对插件做出调试，比方在一天的某个时段显示一个消息。</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ? &#39;0&#39; + time : time;
  }
    
  var output = document.querySelector(&#39;output&#39;);
  var date, hours, mins, secs, tmp_hours, timeofday;
  var messages = {
    &quot;morning&quot;: &quot;Good morning!&quot;,
    &quot;afternoon&quot;: &quot;Good afternoon!&quot;,
    &quot;evening&quot;: &quot;Good evening!&quot;,
    &quot;night&quot;: &quot;Shouldn&#39;t you be in bed?&quot;
  };
    
  // Get and display the current time every 500 milliseconds
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + formatTime(secs);
        
    // Make the Speed Dial title display time-related message
    if (hours !== tmp_hours) {
      if (hours &gt; 15) {
        timeofday = &#39;evening&#39;;
      } else if (hours &gt; 11) {
        timeofday = &#39;afternoon&#39;;
      } else if (hours &gt; 3) {
        timeofday = &#39;morning&#39;;
      } else {
        timeofday = &#39;night&#39;;
      }
            
      if (opera.contexts.speeddial) {
        opera.contexts.speeddial.title = messages[timeofday];
      }
      tmp_hours = hours;
    }
  }, 500); // Twice a second to allow for slight delays in JavaScript execution
}, false);</code></pre>

<p>这和第一个例子类似，并加了以下:</p>

<ul>
	<li>一个消息对象，在不同时间显示不同讯息。</li>
	<li>一个测试机制，每小时执行一次代码。</li>
	<li>通过 <code>messages</code> 对象在快速拨号标题显示讯息</li>
</ul>


<p>这里下载 <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">friendly_clock_SD_extension.oex</a>: </p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/453-/friendly_clock_extension_in_speed-dial.jpg" width="400" height="256" alt="Friendly clock extension installed in the Opera browser&#39;s Speed Dial." /></p>
<p class="comment">图 2: Opera 快速拨号中的扩展。</p>

<h2>总结</h2>

现在大家又可以给自己的插件添加额外功能了。例子确实简单，不过显示快速拨号的扩展插件支持可以制造一些酷的东西。我们希望在 <a href="https://addons.opera.com/addons/extensions/">Opera 扩展网站</a>上看到您的作品!

<h2>参考</h2>
<p><a href="http://www.opera.com/docs/apis/extensions/speeddialguide/">Opera Extensions API: 快速拨号指南（英文）</a></p></p>
