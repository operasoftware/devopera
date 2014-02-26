---
title: WebVTT 及 HTML5 `<track>` 元素简介
authors:
- ian-devlin
tags:
- accessibility
- audio
- captions
- html5
- polyfill
- subtitles
- text
- track
- tracks
- video
- webvtt
layout: article
---

## 简介

网络视频文本轨道，简称为 WebVTT， 是一种用于标记文本轨道的文件格式。它与 HTML5 `<track>` 元素相结合，可给音频／视频等媒体资源添加字幕，标题和其他描述信息，并同步显示。

给媒体文件添加文本信息，是为了让媒体面向更多的人群，使其容易访问。如有听觉障碍的人，或者更普遍地说，不熟悉这门语言的观众。

这篇文章将介绍 WebVTT 文件格式，其设置选项，以及如何和 HTML5 `<track>` 元素结合使用，来给视频文件添加字幕。

## 文件格式

WebVTT 文件是一个以 UTF-8 为编码，以 `.vtt` 为文件扩展名的简单文本文件。它遵循由 [W3C 规范][1] 所定义的特定格式。听起来很难，你需要学习一门新的文件格式，其实不用担心，VTT 文件格式被精心设计得很简单。

[1]: http://dev.w3.org/html5/webvtt/#the-webvtt-file-format

注意：若要在你的服务器上使用 WebVTT 文件，你可能需要显性定义其内容类型，例如，在Apache服务器的 .htaccess 文件中加入：

	<Files mysubtitle.vtt>
		ForceType text/vtt;charset=utf-8
	</Files>

WebVTT文件的头部按如下顺序定义：

1. 可选的 字节顺序标记（BOM）
2. 字符串 _WEBVTT_
3. 一个空格（Space）或者制表符（Tab），后面接任意非回车换行的元素
4. <span id="webvtt-line-terminator">两个或两个以上的 "WEBVTT 行结束符" ：回车 `\r`，换行 `\n`，或者同时回车换行 `\r\n`</span>

示例如下：

	WEBVTT

	Cue-1
	00:00:15.000 --> 00:00:18.000
	At the left we can see...

接下来我们来谈如何定义文本内容，这也是比较重要的一点。

### WebVTT Cues

WebVTT 文件包含一个或多个 "WebVTT Cues", 各个之间用两个或多个 [WebVTT 行结束符](#webvtt-line-terminator) 分隔开来。

WebVTT Cue 允许你指定特定时间戳范围内的文字（如字幕）。你也可以给 WebVTT Cue 指定一个唯一的标识符，标识符由简单字符串构成，不包含 `-->` ，也不包含任何的 [WebVTT 行结束符](#webvtt-line-terminator)。每一个提示采用以下格式：

	[idstring]
	[hh:]mm:ss.msmsms --> [hh:]mm:ss.msmsms
	Text string

标志符是可选项，可有可无，然而我们建议加入，因为它能够帮助组织文件，也方便脚本操控。

时间戳遵循一个标准格式：小时部分`[hh:]`是可选的，毫秒和秒用一个点 `.` 分离，而不是冒号 `:` 。时间戳范围的后者必须大于前者。对于不同的 Cues，时间戳可以重叠，但在单个 Cue 中，你不能有字符串 `-->` 或两个连续的行结束符。

时间范围后的文字可以是单行或者多行。特定的时间范围之后的任何文本都与该时间范围匹配，直到一个新的 Cue 出现或文件结束。

以下是一些 _WebVTT_ cue 的例子：

	Cue-8
	00:00:52.000 --> 00:00:54.000
	I don’t think so. You?

	Cue-9
	00:00:55.167 --> 00:00:57.042
	I’m Ok.

接下来我们看看如何用 WebVTT cue 的设置选项来定义 Cue 的特性。

### WebVTT Cue 设置

在时间范围值后面，可以为 Cue 做设置：

	[idstring]
	[hh:]mm:ss.msmsms --> [hh:]mm:ss.msmsms [cue settings]
	Text string

这些 Cue 的设置能够定义文本的位置和对齐方式，设置选项如下：

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
	<td></td>
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

注意：如果没有设置 Cue 选项，默认位置是底部居中。

让我们用一个例子来看这些设置如何使用：

	Cue-8
	00:00:52.000 --> 00:00:54.000 align:start size:15%
	I don’t think so. You?

	Cue-9
	00:00:55.167 --> 00:00:57.042 align:end line:10%
	I’m Ok.

在这个例子里，"Cue-8" 将靠左对齐，文本框大小为15%，而 "Cue-9" 靠右对齐，纵向位置距离框顶部10%。

### _WebVTT_ Cue 内联样式

除此之外，你可以用 "WebVTT Cue 内联样式" 来给实际 Cue 文本添加样式。这些内联样式类似于 HTML 元素，可以用来添加语义及样式。可用的内联样式如下列出：

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
	<td markdown="span">用 `c` 定义 （CSS）类, 例如， `<c.className>Cue text</c>`</td>
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
	<td markdown="span">定义类似于 HTML5 的 [`<ruby>` 元素](http://dev.w3.org/html5/spec/the-ruby-element.html#the-ruby-element)。在这样的内联样式中，允许出现一个或多个 `<rt>` 元素。（[`<ruby>` 元素用于标注汉字等东亚字符的发音](http://my.opera.com/tagawa/blog/the-html5-ruby-element-in-words-of-one-syllable-or-less)）</td>
</tr>
<tr id="voice-label">
	<td>v</td>
	<td markdown="span">如有提供，则用来指定声音标签。例如， `<v Ian>This is useful for adding subtitles</v>`。注意此声音标签不会显示，它只是作为一个样式标记。
</td>
</tr>
</tbody>
</table>

一个内联样式的实际应用例子如下：

	Cue-8
	00:00:52.000 --> 00:00:54.000 align:start size:15%
	<v Emo>I don’t think so. <c.question>You?</c></v>

	Cue-9
	00:00:55.167 --> 00:00:57.042 align:end line:10%
	<v Proog>I’m Ok.</v>

这个例子给 Cue 文本添加两种不同的声音标签： _Emo_ 和 _Proog_ 。另外，一个 `question` 的 CSS 类被指定，可以按惯常方法在 CSS 链接文件 或 HTML 页面里为其指定样式。

注意要给 Cue 文本添加 CSS 样式，你需要用一个特定的伪选择元素，例子如下:

	video::cue(v[voice="Emo"]) { color:lime }

给 Cue 文本添加时间戳也是可能的，表示在不同的时间，不同的内联样式出现，例子如下：

	Cue-8
	00:00:52.000 --> 00:00:54.000
	<c>I don’t think so.</c> <00:00:53.500><c>You?</c>

虽然所有文本依旧在同一时间同时显示，不过在支持的浏览器中，你可以用 `:past` 和 `:future` 伪类为其显示不同样式。例如：

	video::cue(c:past) { color:yellow }

如你所见，WebVTT 文件给你提供很多设置选项，让你能够控制文本（主要是视频字幕）的显示方式。但如何让你的文本出现在媒体文件里面呢？其他还能做什么？ 接下来我们将学习这部分内容。

注意：如果需要检查你的 WebVTT 是否书写正确，可查看 [ WebVTT 校验器][6]

[6]: http://quuz.org/webvtt/

## 使用 `<track>` 元素

HTML5 的 `<track>` 元素可以把外部轨道文件链接到特定资源上。`<track>` 元素的属性如下：

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
	<td></td>
	<td>captions</td>
	<td>标题，不仅仅是标题，还包括音效及其他音频信息。</td>
</tr>
<tr>
	<td></td>
	<td>descriptions</td>
	<td>描述，视频的文本描述。</td>
</tr>
<tr>
	<td></td>
	<td>chapters</td>
	<td>章节导航</td>
</tr>
<tr>
	<td></td>
	<td>metadata</td>
	<td>元数据</td>
</tr>
<tr>
	<td>src</td>
	<td>URL</td>
	<td>指定资源URL</td>
</tr>
<tr>
	<td>srclang</td>
	<td>Language code</td>
	<td markdown="span">在 `src` 资源的语言</td>
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

`<track>` 元素是 `<audio>` 或 `<video>` 的子元素，可定义多个 `<track>` 元素：每个提供不同语言的字幕或不同的文本轨道。一个包含英文德文字幕和英文章节的视频例子如下：

	<video controls>
		<source src="elephants-dream.mp4" type="video/mp4">
		<source src="elephants-dream.webm" type="video/webm">
		<track label="English subtitles" kind="subtitles" srclang="en"
			src="elephants-dream-subtitles-en.vtt" default>
		<track label="Deutsche Untertitel" kind="subtitles" srclang="de"
			src="elephants-dream-subtitles-de.vtt">
		<track label="English chapters" kind="chapters" srclang="en"
			src="elephants-dream-chapters-en.vtt">
	</video>

## 浏览器支持

遗憾的是，当前浏览器对 WebVTT 和 `<track>` 元素的支持不足，只在 Internet Explorer 10 和 Chrome 16+ 中可用。

你可以在 chrome 中启动对 `track` 元素的解析， （通过 `chrome:flags` 和 "enable `<track>` element"启用），使其对 WebVTT 字幕进行渲染。但在多个 `track` 元素（`kind="subtitles"`）存在的情况下，无法选择不同的语言。而尽管 `default` 属性不是必须的，含有 `default` 属性的字幕会被选择。

Internet Explorer 10 支持 [WebVTT 和 `<track>` 元素][7], 但只是在 beta 阶段且只在 Windows 8上支持。

[7]: http://ie.microsoft.com/testdrive/Graphics/VideoCaptions/Default.html

目前为止，一种跨浏览器的解决方案是使用JavaScript Polyfill。

## Polyfills

现在有很多 `<track>` Polyfills 可用，但大多数并不支持 WebVTT —它们支持之前的，早于 WebVTT 出现的 WebSRT 格式。以下是一些_支持 _WebVTT 的 Polyfills列表 :

- [Playr][8] ，作者 [Julien Villetorte][9] — 支持字幕，标题，及章节
- [Captionator][10] ，作者 [Christopher Giffard][11] — 支持字幕
- [MediaElementJS][12] ，作者 [John Dyer][13] — 支持字幕

[8]: http://www.delphiki.com/html5/playr/
[9]: https://twitter.com/delphiki
[10]: http://captionatorjs.com/
[11]: https://twitter.com/cgiffard
[12]: http://mediaelementjs.com/
[13]: https://twitter.com/johndyer

以上所有都支持 HTML5 `<video>`, 但不支持 HTML5 `<audio>`，但它们都很容易改进以适应两者。

就个人而言，我比较喜欢用 Playr ，因为它不仅仅支持字幕，而且还是最容易使用的 Polyfills 之一。让我们看一个实现的例子：

## WebVTT/`<track>` Polyfill 例子

Julien “delphiki” Villetorte 的 Playr 非常好用，准备好你的WebVTT 文件和视频。

### 使用 Playr

配置和运行 Playr 步骤：

1. 从 [Github][14]下载 Playr

[14]: https://github.com/delphiki/Playr/downloads

2. 把 javascript 和 CSS 文件包含在你的网页中，如下：

	<link rel="stylesheet" href="playr/playr.css">
	<script src="playr/playr.js"></script>

3. 在你的`<video>`元素中加入类名 `playr_video`

就可以了！ Playr 将负责播放视频及解析包含的 `<track>` 元素。如前所述， Playr 包含字幕，章节和标题（如字幕一般处理）。我的 [代码例子][15] 给视频添加了英文和德文的字幕， 以及英文的章节。

[15]: /articles/an-introduction-to-webvtt-and-track/webvtt-example.html

我的`<video>` 元素例子如下：

	<video preload="metadata" controls class="playr_video">
		<source src="elephants-dream.mp4" type="video/mp4">
		<source src="elephants-dream.webm" type="video/webm">
		<track label="English subtitles" kind="subtitles" srclang="en"
			src="elephants-dream-subtitles-en.vtt" default>
		<track label="Deutsch subtitles" kind="subtitles" srclang="de"
			src="elephants-dream-subtitles-de.vtt">
		<track label="English chapters" kind="chapters" srclang="en"
			src="elephants-dream-chapters-en.vtt">
	</video>

### 显示字幕：

除了添加字幕及章节外，我还写了一个小的 JavaScript 文件， [`transcript.js`][16], 定义了一个 `loadTranscriptFile` 函数。它将 WebVTT 字幕（或标题）文件作为参数，解析它们 （用 Playr 里的代码），将字幕嵌入在一个 id 为 `transcript` 的元素中，显示在屏幕上。

[16]: ../../../static/articles/2012/an-introduction-to-webvtt-and-track/transcript.js

如果 WebVTT 的字幕文本包含 ["voice" 标签][17], 输入的名称也会在文本旁边显示。

[17]: index.html#voice-label

## 总结

WebVTT 和 HTML5 `<track>` 元素使得网络作者更容易推广其视频／音频内容，让那些对内容原本呈现方式无法理解的受众，也能同样获取内容。

尽管浏览器的支持还是新兴的，但一些 Javascript 可以让我们的媒体文件更容易访问，而浏览器对 WebVTT 的支持也会增加。

可访问性是网络作者在为用户提供媒体内容时所需要考虑的。更多用户更多欢乐，不是吗？
