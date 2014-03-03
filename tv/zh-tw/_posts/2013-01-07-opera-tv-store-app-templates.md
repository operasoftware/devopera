---
title: Opera TV Store 應用程式範本
authors:
- daniel-davis
tags:
- opera-tv-store
- tv
license: cc-by-3.0
layout: article
---

## 簡介

從發行 Opera TV Store 的那一天開始，我們看到建立者們已發佈各種不同的應用程式供使用者享用。我們的 TV 應用程式是使用網頁標準所建立的，這表示網頁開發者可使用他們現有的技術為 TV 平台建立內容。開發 TV 內容的操作可能還是無法駕輕就熟，不過為了讓操作更簡單，我們建立了幾個供內容建立者自由使用的一般應用程式範本。

無論是在哪個平台上，新聞和娛樂是所有內容種類中最受歡迎的，所以我們提供的是影片播放器和 RSS 閱讀器應用程式的範本。這兩個範本的目的都是在於協助您更輕易的自訂開發內容，讓您不需擔心可能需耗費大量的開發時間和成本就可快速發佈您自有品牌的應用程式。

## 影片播放器範本

<figure id="figure-1">
	<img src="/articles/opera-tv-store-app-templates/video-app-template.jpg" alt="顯示 TV 影片播放器應用程式正在使用中的螢幕擷取畫面。">
	<figcaption markdown="span">圖 1：TV 影片播放器範本正在使用中。</figcaption>
</figure>

### 概覽

影片應用程式範本不僅僅只是個簡單的播放器，它可讓您根據主題或主旨將影片分類到不同的頻道中。這個範本中還有內建的書籤功能，使用者可將他們特別喜歡的影片移到我的最愛清單中。觀看影片時，使用者還可選擇連續播放影片，甚至可以讓影片設定隨機播放。如果要自訂此範本，有三個主要的項目可輕易地編輯，資料 (透過 XML 檔案或您現有的 API 進行編輯)、影像和色彩。

### 自訂功能

第一個步驟是新增您選擇的影片和頻道。您可在 `video.xml` 檔案中完成此步驟，完成後就如同下圖所示：

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

此檔案是透過 `videotemplate.js` 檔案中的 `getData()` 函式所讀取，所以如果您想要以自己的 API 或 RSS 摘要作為影片來源，只需變更該函式中的檔案位址即可。您還必須變更該檔案的 `prepareData()` 函式中的剖析規則以適用於您的影片來源。

如果要制定視覺化自訂功能，所有影像都包含在 `images` 目錄當中，且依邏輯方式命名檔案名稱，例如 `logo.png`。這可讓您用自己的標誌和色彩配置輕易地取代這些影像。此外，`css` 目錄中還提供了 `style.css` 檔案，此檔案是應用程式設計可套用的樣式。我們也在此檔案的上方放置了字型和色彩的定義，讓您可更輕易地進行自訂。

## RSS 閱讀器範本

<figure id="figure-2">
	<img src="/articles/opera-tv-store-app-templates/rss-app-template.jpg" alt="顯示 TV RSS 閱讀器應用程式正在使用中的螢幕擷取畫面。">
	<figcaption markdown="span">圖 2：TV RSS 閱讀器範本正在使用中。</figcaption>
</figure>

### 概覽

RSS 閱讀器範本可讓您方便地在單一應用程式中提供新聞或其他定期更新的內容。就如同影片應用程式範本，您可使用電視遙控器的方向鍵輕易控制此範本，且範本中內含可將每個新聞項目或文章自動逐一顯示的投影片放映功能。自訂功能可包含簡單的色彩變更或像是編輯動態產生的 HTML 諸如此類更進階的變更。

### 自訂功能

最重要的步驟就是指定您要使用的摘要。您可透過編輯 `js/config.js` 檔案中的 `DEF_FEEDS` 陣列來完成此步驟。您可以隨喜好不限數量地新增摘要，包括裝載在外部網域上的摘要，不過您必須使用代理摘要伺服器才能運用瀏覽器安全性措施。使用說明中 有設定此功能的指示，此指示和下方可下載套件有關聯。摘要清單內容可能如下方顯示：

	var DEF_FEEDS = [{
		url: 'data/data.xml'
	},
	{
		url: 'http://my.opera.com/chooseopera/xml/rss/blog/',
		proxy: true
	}];

`js/config.js` 檔案中還有可變更應用程式標題和代理伺服器位址的選項，您可能需要使用：

	/**
	 * Application main title
	 */
	var APP_TITLE = 'All feeds';

	/**
	 * Proxy URL
	 */
	var PROXY_URL = '/xhrproxy/?_proxy_url=';

應用程式的視覺化樣式可透過編輯 `css/common.css` 檔案來進行變更，如果您想要編輯每個摘要項目所使用的 HTML，您也可以使用 `TMPL` 和 `TMPL_CONTENT` 陣列中的 `js/Item.js` 檔案進行。

## 下載範本！

您可以到這裡下載應用程式範本 (ZIP 檔案)：

- [影片播放器應用程式範本][3]
- [RSS 閱讀器應用程式範本][4]

[3]: http://apps.tvstore.opera.com/templates/videotemplate.zip
[4]: http://apps.tvstore.opera.com/templates/rssreader.zip

這兩個 ZIP 檔案中都內含新增資料操作方式和自訂符合個人品味的範本之詳細說明或品牌方針。這些範本已經過設計，所以您不需藉由編輯功能或配置就能建立容易使用又美觀的應用程式，而且，由於這兩個範本是以免費、開放的來源授權方式提供，所以如果您需要的話也可以隨心所欲自訂功能更進階的程式碼。我們期待看到您利用 Opera TV Store 中的範本所建立的應用程式！