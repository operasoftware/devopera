---
title: Opera TV Store 应用程序模板
authors:
- daniel-davis
tags:
- opera-tv-store
- tv
language: zh-cn
license: cc-by-3.0
---

## 简介

Opera TV Store 推出后，我们已经看到开发人员开始发布各种应用供用户使用。我们的 TV 应用遵循 Web 标准，因此网页开发者可以用既有的web技术为 TV 平台创建内容。尽管如此，开发TV应用对很多开发人员来说依然相对陌生。为了让TV应用开发更加容易，我们特地创建了几个常见应用类型模板供大家免费使用。

无论是在任何平台上，新闻和娱乐都是最受欢迎的内容类型，我们提供的应用模板也因此包含视频播放器和 RSS 阅读器。两者的设计目的都是为了方便您进行自定义开发，让您无需担心需耗费大量开发时间和费用，就可快速发布您自有品牌的应用。

## 视频播放器模板

<figure id="figure-1">
	<img src="/articles/opera-tv-store-app-templates/video-app-template.jpg" alt="显示此 TV 视频播放器应用正在使用中的屏幕截图。">
	<figcaption markdown="span">图 1：TV 视频播放器模板正在使用中。</figcaption>
</figure>

### 概览

视频应用模板不仅仅是一个简单的播放器，它可让您根据主题或主旨把视频分类到不同的频道中。此模板中还有一个内置书签功能，用户可以把自己喜欢的视频移到收藏列表里。观看视频时，用户还可以选择连续播放视频，又或者是随机播放。你可以从下面几个主要的方面来自定义这个模板：数据（通过 XML 文件或修改现有的 API）、图像和颜色。

### 自定义

定制视频应用的第一件事情可能就是添加您自己的视频和频道来源。您可在 `video.xml` 文件中完成此步骤，请参考以下示例

	<?xml version="1.0" encoding="UTF-8"?>
	<rss>
		<channel>
		<item>
			<title>Opera Labs: Mobile Extensions</title>
			<description>We’re excited to share with you a Labs release of our mobile browser with support for extensions.</description>
			<category>Opera Labs</category>
			<duration>00:01:24</duration>
			<content url="http://apps.tvstore.opera.com/videos/Opera_Labs_Mobile_Extensions.mp4" fileSize="24434480" type="video/mp4" />
			<thumbnail url="http://apps.tvstore.opera.com/videos/Opera_Labs_Mobile_Extensions.jpg" width="250" height="140" />
		</item>
		</channel>
	</rss>

这个文件会被 `videotemplate.js` 文件中的 `getData()` 函数读取，所以如果您想要使用自己的 API 或者 RSS 新闻推送作为视频来源, 修改该项函数中的文件地址即可。除此以外，您还需要根据你的视频来源更改该文件中的 `prepareData()` 函数中的解析规则。

如果要进行视觉自定义，所有图像都包含在 `images` 目录中，并且以逻辑方式命名文件名称，例如 `logo.png`。这样您可以方便的将其替换为自己的LOGO和颜色方案。此外，`css` 目录中名为`style.css` 文件包含应用设计可套用的风格。这个文件里面也包含字体和颜色定义，可以很方便的被自定义。

## RSS 阅读器模板

<figure id="figure-2">
	<img src="/articles/opera-tv-store-app-templates/rss-app-template.jpg" alt="显示此 TV RSS 阅读器应用正在使用中的屏幕截图。">
	<figcaption markdown="span">图 2：TV RSS 阅读器模板正在使用中。</figcaption>
</figure>

### 概览

RSS 阅读器应用模板可以很方便的在单一应用中提供新闻或其它定期更新的内容。如同视频应用模板， 这个模板使用电视遥控器的方向键就可以很容易的控制。模板中还包含一个幻灯片放映功能，可自动的逐一显示每个新闻项目或文章。对其的自定义包含从非常简单的颜色修改， 到很深层的修改，比如修改其动态生成HTML代码

### 自定义

要自定义这个模板，最重要的一步是指定您要使用的新闻推送。您可通过编辑 `js/config.js` 文件中的 `DEF_FEEDS` 数组完成此步骤。您根据需要不限数量的添加新闻推送，无论是本域还是外域。 但是对于外域，由于浏览器的跨域限制（不允许跨域访问）， 您必须使用一个代理新闻推送服务器才能绕过跨域问题。教程中稍后有如何设置此功能的教程，下载包里也有相关内容。下面是新闻推送列表的一个示例：

	var DEF_FEEDS = [{
		url: 'data/data.xml'
	},
	{
		url: 'http://my.opera.com/chooseopera/xml/rss/blog/',
		proxy: true
	}];

`js/config.js` 文件中还有可更改应用标题和代理服务器地址的选项，您可视需要使用：

	/**
	 * Application main title
	 */
	var APP_TITLE = 'All feeds';

	/**
	 * Proxy URL
	 */
	var PROXY_URL = '/xhrproxy/?_proxy_url=';

通过编辑 `css/common.css` 文件可以更改应用的视觉风格，如果您想要编辑每个新闻推送项目使用的 HTML，则可以编辑`js/Item.js` 文件中的 `TMPL` 和 `TMPL_CONTENT` 数组。

## 下载模板！

此处可下载应用模板（ZIP 文件）：

- [视频播放器应用模板][3]
- [RSS 阅读器应用模板][4]

[3]: http://apps.tvstore.opera.com/templates/videotemplate.zip
[4]: http://apps.tvstore.opera.com/templates/rssreader.zip

这两个 ZIP 文件都含有添加数据操作方式以及自定义的详细教程。这些模板本身已经包含界面设计，所以您无需编辑功能或布局就可创建易于使用、赏心悦目的应用，而且，由于这两个模板是以免费、开放源许可证提供的，如果您需要的话也可以进行二次开发。我们非常期待看到您使用 Opera TV Store 模板所创建的应用！
