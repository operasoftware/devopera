Title: WebVTT 及 HTML5 <track> 元素简介
----
Date: 2012-09-11 03:48:28
----
Lang: zh-cn
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>简介</h2>

<p>网络视频文本轨道，简称为 <abbr title="Web Video Text Tracks">WebVTT</abbr>， 是一种用于标记文本轨道的文件格式。它与 <abbr title="HyperText Markup Language 5">HTML5</abbr> <code>&lt;track&gt;</code> 元素相结合，可给音频／视频等媒体资源添加字幕，标题和其他描述信息，并同步显示。</p>

<p>给媒体文件添加文本信息，是为了让媒体面向更多的人群，使其容易访问。如有听觉障碍的人，或者更普遍地说，不熟悉这门语言的观众。</p>

<p>这篇文章将介绍 <abbr>WebVTT</abbr> 文件格式，其设置选项，以及如何和 HTML5 <code>&lt;track&gt;</code> 元素结合使用，来给视频文件添加字幕。</p>

<h2>文件格式</h2>

<p><abbr>WebVTT</abbr> 文件是一个以 <abbr title="Unicode Transformation Format-8">UTF-8</abbr> 为编码，以 <code>.vtt</code> 为文件扩展名的简单文本文件。它遵循由 <a href="http://dev.w3.org/html5/webvtt/#the-webvtt-file-format">W3C 规范</a> 所定义的特定格式。听起来很难，你需要学习一门新的文件格式，其实不用担心，VTT 文件格式被精心设计得很简单。</p>

<div class="note">
  <p>注意：若要在你的服务器上使用 WebVTT 文件，你可能需要显性定义其内容类型，例如，在Apache服务器的 .htaccess 文件中加入：</p>

<pre><code class="html">&lt;Files mysubtitle.vtt&gt;
 ForceType text/vtt;charset=utf-8
&lt;/Files&gt;</code></pre>

</div>

<p> <abbr>WebVTT</abbr>文件的头部按如下顺序定义：</p>

<ol>
  <li>可选的 <abbr title="Byte Order Mark">字节顺序标记（BOM）</abbr> </li>
  <li>字符串 <em><abbr>WEBVTT</abbr></em></li>
  <li>一个空格（Space）或者制表符（Tab），后面接任意非回车换行的元素</li>
  <li id="webvtt-line-terminator">两个或两个以上的 &quot;<abbr>WEBVTT</abbr> 行结束符&quot; ：回车 （\r），换行 （\n），或者同时回车换行 （\r\n） </li>
</ol>

<p>示例如下：</p>

<pre><code class="no-highlight">WEBVTT

Cue-1
00:00:15.000 --&gt; 00:00:18.000
At the left we can see...</code></pre>

<p>接下来我们来谈如何定义文本内容，这也是比较重要的一点。</p>

<h3><abbr>WebVTT</abbr> Cues</h3>

<p><abbr>WebVTT</abbr> 文件包含一个或多个 &quot;<abbr>WebVTT</abbr> Cues&quot;, 各个之间用两个或多个 <a href="#webvtt-line-terminator"><abbr>WebVTT</abbr> 行结束符</a> 分隔开来。</p>

<p> <abbr>WebVTT</abbr> Cue 允许你指定特定时间戳范围内的文字（如字幕）。你也可以给 <abbr>WebVTT</abbr> Cue 指定一个唯一的标识符，标识符由简单字符串构成，不包含 “--&gt;” ，也不包含任何的 <a href="#webvtt-line-terminator"><abbr>WebVTT</abbr> 行结束符 </a>。每一个提示采用以下格式：</p>

<pre><code class="no-highlight">[idstring]
[hh:]mm:ss.msmsms --&gt; [hh:]mm:ss.msmsms
Text string</code></pre>

<p class="note">标志符是可选项，可有可无，然而我们建议加入，因为它能够帮助组织文件，也方便脚本操控。</p>

<p>时间戳遵循一个标准格式：小时部分<code>[hh:]</code>是可选的，毫秒和秒用一个点（.）分离，而不是冒号（:）。时间戳范围的后者必须大于前者。对于不同的 Cues，时间戳可以重叠，但在单个 Cue 中，你不能有字符串“--&gt;”或两个连续的行结束符。</p>

<p>时间范围后的文字可以是单行或者多行。特定的时间范围之后的任何文本都与该时间范围匹配，直到一个新的 Cue 出现或文件结束。</p>

<p>以下是一些 <em>WebVTT</em> cue 的例子：</p>

<pre><code class="no-highlight">Cue-8
00:00:52.000 --&gt; 00:00:54.000
I don&#39;t think so. You?

Cue-9
00:00:55.167 --&gt; 00:00:57.042
I&#39;m Ok.</code></pre>

<p>接下来我们看看如何用 <abbr>WebVTT</abbr> cue 的设置选项来定义 Cue 的特性。</p>

<h3><abbr>WebVTT</abbr> Cue 设置</h3>

<p>在时间范围值后面，可以为 Cue 做设置：</p>

<pre><code class="no-highlight">[idstring]
[hh:]mm:ss.msmsms --&gt; [hh:]mm:ss.msmsms [cue settings]
Text string</code></pre>

<p>这些 Cue 的设置能够定义文本的位置和对齐方式，设置选项如下：</p>

<table>
<thead>
<tr>
<th>设置</th>
<th>值</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr id="vertical-setting">
<td>vertical</td>
<td>rl || lr</td>
<td>将文本纵向向左对齐 （lr） 或向右对齐 （rl） （如：日文的字幕）</td>
</tr>
<tr id="line-setting">
<td>line</td>
<td>[-][0 or more]</td>
<td> 行位置，负数从框底部数起，正数从顶部数起</td>
</tr>
<tr>
<td>&#xA0;</td>
<td>[0-100]%</td>
<td>百分数意味着离框顶部的位置</td>
</tr>
<tr id="position-setting">
<td>position</td>
<td>[0-100]%</td>
<td>百分数意味着文字开始时离框左边的位置（如：英文字幕）</td>
</tr>
<tr id="size-setting">
<td>size</td>
<td>[0-100]%</td>
<td>百分数意味着 cue 框的大小是整体框架宽度的百分比</td>
</tr>
<tr id="align-setting">
<td>align</td>
<td>start || middle || end</td>
<td>指定 cue 中文本的对齐方式</td>
</tr>
</tbody>
</table>

<p class="note">注意：如果没有设置 Cue 选项，默认位置是底部居中。</p>

<p>让我们用一个例子来看这些设置如何使用：</p>

<pre><code class="no-highlight">Cue-8
00:00:52.000 --&gt; 00:00:54.000 align:start size:15%
I don&#39;t think so. You?

Cue-9
00:00:55.167 --&gt; 00:00:57.042 align:end line:10%
I&#39;m Ok.</code></pre>

<p>在这个例子里，&quot;Cue-8&quot; 将靠左对齐，文本框大小为15%，而 &quot;Cue-9&quot; 靠右对齐，纵向位置距离框顶部10%。</p>

<h3><em>WebVTT</em> Cue 内联样式</h3>

<p>除此之外，你可以用 &quot;<abbr>WebVTT</abbr> Cue 内联样式&quot; 来给实际 Cue 文本添加样式。这些内联样式类似于 <abbr title="HyperText Markup Language">HTML</abbr> 元素，可以用来添加语义及样式。可用的内联样式如下列出：</p>

<table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr id="class-label">
<td>c</td>
<td>用 <code>c</code> 定义 （<abbr title="Cascading StyleSheets">CSS</abbr>）类, 例如， <code>&lt;c.className&gt;Cue text&lt;/c&gt;</code></td>
</tr>
<tr id="italic-label">
<td>i</td>
<td>斜体字</td>
</tr>
<tr id="bold-label">
<td>b</td>
<td>粗体字</td>
</tr>
<tr id="underline-label">
<td>u</td>
<td>添加下划线</td>
</tr>
<tr id="ruby-label">
<td>ruby</td>
<td>定义类似于 <abbr>HTML5</abbr> 的 <a href="http://dev.w3.org/html5/spec/the-ruby-element.html#the-ruby-element">ruby 元素</a>。在这样的内联样式中，允许出现一个或多个 <code>rt</code> 元素。 （<a href="http://my.opera.com/tagawa/blog/the-html5-ruby-element-in-words-of-one-syllable-or-less"> <code>&lt;ruby&gt;</code> 元素用于标注汉字等东亚字符的发音</a>）</td>
</tr>
<tr id="voice-label">
<td>v</td>
<td>如有提供，则用来指定声音标签。例如， <code>&lt;v Ian&gt;This is useful for adding subtitles&lt;/v&gt;</code>。注意此声音标签不会显示，它只是作为一个样式标记。
</td>
</tr>
</tbody>
</table>

<p>一个内联样式的实际应用例子如下：</p>

<pre><code class="no-highlight">Cue-8
00:00:52.000 --&gt; 00:00:54.000 align:start size:15%
&lt;v Emo&gt;I don&#39;t think so. &lt;c.question&gt;You?&lt;/c&gt;&lt;/v&gt;

Cue-9
00:00:55.167 --&gt; 00:00:57.042 align:end line:10%
&lt;v Proog&gt;I&#39;m Ok.&lt;/v&gt;</code></pre>

<p>这个例子给 Cue 文本添加两种不同的声音标签： <em>Emo</em> 和 <em>Proog</em> 。另外，一个 <code>question</code> 的 <abbr>CSS</abbr> 类被指定，可以按惯常方法在 <abbr>CSS</abbr> 链接文件 或 <abbr>HTML</abbr> 页面里为其指定样式。</p>

<div class="note">
<p>注意要给 Cue 文本添加 CSS 样式，你需要用一个特定的伪选择元素，例子如下:</p>

<pre><code class="css">video::cue(v[voice=&quot;Emo&quot;]) { color:lime }</code></pre>
</div>

<p>给 Cue 文本添加时间戳也是可能的，表示在不同的时间，不同的内联样式出现，例子如下：</p>

<pre><code class="no-highlight">Cue-8
00:00:52.000 --&gt; 00:00:54.000
&lt;c&gt;I don&#39;t think so.&lt;/c&gt; &lt;00:00:53.500&gt;&lt;c&gt;You?&lt;/c&gt;</code></pre>

<p>虽然所有文本依旧在同一时间同时显示，不过在支持的浏览器中，你可以用 <code>:past</code> 和 <code>:future</code> 伪类为其显示不同样式。例如：</p>

<pre><code class="css">video::cue(c:past) { color:yellow }</code></pre>

<p>如你所见，<abbr>WebVTT</abbr> 文件给你提供很多设置选项，让你能够控制文本（主要是视频字幕）的显示方式。但如何让你的文本出现在媒体文件里面呢？其他还能做什么？ 接下来我们将学习这部分内容。</p>

<p class="note">注意：如果需要检查你的 WebVTT 是否书写正确，可查看 <a href="http://quuz.org/webvtt/"> WebVTT 校验器</a> </p>

<h2>使用 <code>&lt;track&gt;</code> 元素</h2>

<p><abbr>HTML5</abbr> 的 <code>&lt;track&gt;</code> 元素可以把外部轨道文件链接到特定资源上。<code>&lt;track&gt;</code> 元素的属性如下：</p>

<table>
<thead>
<tr>
<td>名称</td>
<td>值</td>
<td>说明</td>
</tr>
</thead>
<tbody>
<tr>
<td>kind</td>
<td>subtitles</td>
<td>字幕</td>
</tr>
<tr>
<td>&#xA0;</td>
<td>captions</td>
<td>标题，不仅仅是标题，还包括音效及其他音频信息。</td>
</tr>
<tr>
<td>&#xA0;</td>
<td>descriptions</td>
<td>描述，视频的文本描述。</td>
</tr>
<tr>
<td>&#xA0;</td>
<td>chapters</td>
<td>章节导航</td>
</tr>
<tr>
<td>&#xA0;</td>
<td>metadata</td>
<td>元数据</td>
</tr>
<tr>
<td>src</td>
<td><abbr title="Universal Resource Locator">URL</abbr></td>
<td>指定资源URL</td>
</tr>
<tr>
<td>srclang</td>
<td>Language code</td>
<td>在<code>src</code> 资源的语言</td>
</tr>
<tr>
<td>label</td>
<td>Free text</td>
<td>给元素添加标签</td>
</tr>
<tr>
<td>default</td>
<td>n/a</td>
<td>如果存在，且用户无其他特别设定，这个元素默认启用</td>
</tr>
</tbody>
</table>

<p> <code>&lt;track&gt;</code> 元素是 <code>&lt;audio&gt;</code> 或 <code>&lt;video&gt;</code> 的子元素，可定义多个  <code>&lt;track&gt;</code> 元素：每个提供不同语言的字幕或不同的文本轨道。一个包含英文德文字幕和英文章节的视频例子如下：</p>

<pre><code class="html">&lt;video controls&gt;
  &lt;source src=&quot;elephants-dream.mp4&quot; type=&quot;video/mp4&quot;&gt;
  &lt;source src=&quot;elephants-dream.webm&quot; type=&quot;video/webm&quot;&gt;
  &lt;track label=&quot;English subtitles&quot; kind=&quot;subtitles&quot; srclang=&quot;en&quot;
         src=&quot;elephants-dream-subtitles-en.vtt&quot; default&gt;
  &lt;track label=&quot;Deutsche Untertitel&quot; kind=&quot;subtitles&quot; srclang=&quot;de&quot;
         src=&quot;elephants-dream-subtitles-de.vtt&quot;&gt;
  &lt;track label=&quot;English chapters&quot; kind=&quot;chapters&quot; srclang=&quot;en&quot;
         src=&quot;elephants-dream-chapters-en.vtt&quot;&gt;
&lt;/video&gt;</code></pre>

<h2>浏览器支持</h2>

<p>遗憾的是，当前浏览器对 <abbr>WebVTT</abbr> 和 <code>&lt;track&gt;</code> 元素的支持不足，只在 Internet Explorer 10 和 Chrome 16+ 中可用。</p>
<p>你可以在 chrome 中启动对 <code>track</code> 元素的解析， （通过 <code>chrome:flags</code> 和 &quot;enable <code>&lt;track&gt;</code> element&quot;启用），使其对 <abbr>WebVTT</abbr> 字幕进行渲染。但在多个 <code>track</code> 元素（<code>kind=&quot;subtitles&quot;</code>）存在的情况下，无法选择不同的语言。而尽管  <code>default</code> 属性不是必须的，含有 <code>default</code> 属性的字幕会被选择。</p>
<p>Internet Explorer 10 支持  <a href="http://ie.microsoft.com/testdrive/Graphics/VideoCaptions/Default.html"><abbr>WebVTT</abbr> 和 <code>&lt;track&gt;</code> 元素</a>, 但只是在 beta 阶段且只在 Windows 8上支持。</p>

<p>目前为止，一种跨浏览器的解决方案是使用JavaScript Polyfill。</p>

<h2>Polyfills</h2>

<p>现在有很多 <code>&lt;track&gt;</code> Polyfills 可用，但大多数并不支持 <abbr>WebVTT</abbr> —它们支持之前的，早于 <abbr>WebVTT</abbr> 出现的 <abbr title="Web Subtitle Resource Tracks">WebSRT</abbr> 格式。以下是一些<em>支持 </em><abbr>WebVTT</abbr> 的 Polyfills列表 :</p>

<ul>
<li><a href="http://www.delphiki.com/html5/playr/">Playr</a> ，作者 <a href="http://twitter.com/delphiki">Julien Villetorte</a> — 支持字幕，标题，及章节</li>
<li><a href="http://captionatorjs.com/">Captionator</a> ，作者 <a href="http://twitter.com/cgiffard">Christopher Giffard</a> — 支持字幕</li>
<li><a href="http://mediaelementjs.com/">MediaElementJS</a> ，作者 <a href="http://twitter.com/johndyer">John Dyer</a> — 支持字幕</li>
</ul>

<p>以上所有都支持 <abbr>HTML5</abbr> <code>&lt;video&gt;</code>, 但不支持 <abbr>HTML5</abbr> <code>&lt;audio&gt;</code>，但它们都很容易改进以适应两者。</p>

<p>就个人而言，我比较喜欢用 Playr ，因为它不仅仅支持字幕，而且还是最容易使用的 Polyfills 之一。让我们看一个实现的例子：</p>

<h2>WebVTT/<code>&lt;track&gt;</code> Polyfill 例子</h2>

<p>Julien &#39;delphiki&#39; Villetorte 的 Playr 非常好用，准备好你的<abbr>WebVTT</abbr> 文件和视频。</p>

<h3>使用 Playr</h3>

<p>配置和运行 Playr 步骤：</p>

<ol>
<li><p>从 <a href="https://github.com/delphiki/Playr/downloads">Github</a>下载 Playr  </p></li>
<li><p>把 javascript 和 <abbr>CSS</abbr> 文件包含在你的网页中，如下：</p>

<pre><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;playr/playr.css&quot; /&gt;
&lt;script src=&quot;playr/playr.js&quot;&gt;&lt;/script&gt;</code></pre>
</li>

<li>在你的<code>&lt;video&gt;</code>元素中加入类名 <code>playr_video</code></li>

</ol>

<p>就可以了！ Playr 将负责播放视频及解析包含的 <code>&lt;track&gt;</code> 元素。如前所述， Playr 包含字幕，章节和标题（如字幕一般处理）。我的 <a href="http://dev.opera.com/static/articles/2012/an-introduction-to-webvtt-and-track/webvtt-example.html">代码例子</a> 给视频添加了英文和德文的字幕， 以及英文的章节。</p>

<p> 我的<code>&lt;video&gt;</code> 元素例子如下：</p>

<pre><code class="html">&lt;video preload=&quot;metadata&quot; controls class=&quot;playr_video&quot;&gt;
  &lt;source src=&quot;elephants-dream.mp4&quot; type=&quot;video/mp4&quot;&gt;
  &lt;source src=&quot;elephants-dream.webm&quot; type=&quot;video/webm&quot;&gt;
  &lt;track label=&quot;English subtitles&quot; kind=&quot;subtitles&quot; srclang=&quot;en&quot;
         src=&quot;elephants-dream-subtitles-en.vtt&quot; default&gt;
  &lt;track label=&quot;Deutsch subtitles&quot; kind=&quot;subtitles&quot; srclang=&quot;de&quot;
         src=&quot;elephants-dream-subtitles-de.vtt&quot;&gt;
  &lt;track label=&quot;English chapters&quot; kind=&quot;chapters&quot; srclang=&quot;en&quot;
         src=&quot;elephants-dream-chapters-en.vtt&quot;&gt;
&lt;/video&gt;</code></pre>

<h3>显示字幕：</h3>

<p>除了添加字幕及章节外，我还写了一个小的 JavaScript 文件， <a href="http://dev.opera.com/static/articles/2012/an-introduction-to-webvtt-and-track/transcript.js"><code>transcript.js</code></a>, 定义了一个 <code>loadTranscriptFile</code> 函数。它将 <abbr>WebVTT</abbr> 字幕（或标题）文件作为参数，解析它们 （用 Playr 里的代码），将字幕嵌入在一个 id 为 <code>transcript</code> 的元素中，显示在屏幕上。</p>

<p>如果 <abbr>WebVTT</abbr> 的字幕文本包含 <a href="#voice-label">&quot;voice&quot; 标签</a>, 输入的名称也会在文本旁边显示。</p>

<h2>总结</h2>

<p><abbr>WebVTT</abbr> 和 <abbr>HTML5</abbr> <code>&lt;track&gt;</code> 元素使得网络作者更容易推广其视频／音频内容，让那些对内容原本呈现方式无法理解的受众，也能同样获取内容。</p>

<p>尽管浏览器的支持还是新兴的，但一些 Javascript 可以让我们的媒体文件更容易访问，而浏览器对 <abbr>WebVTT</abbr> 的支持也会增加。</p>

<p>可访问性是网络作者在为用户提供媒体内容时所需要考虑的。更多用户更多欢乐，不是吗？</p>

/abbr
