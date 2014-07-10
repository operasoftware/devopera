---
title: Opera TV Store アプリケーションテンプレート
authors:
- daniel-davis
tags:
- opera-tv-store
- tv
license: cc-by-3.0
---

## イントロダクション

Opera TV Store がスタートしてから、これまでに多くのアプリケーションが公開され、ユーザーに親しまれてきました。Opera の TV アプリケーションは Web 標準を用いて作成されるため、Web 開発者はすでに持っているスキルを使って、TV プラットフォーム向けのコンテンツを作成することができます。しかし TV 向けの開発は依然として馴染みのないものに感じられることもあるため、クリエイターの方々が自由に使えるような形で典型的なアプリ向けのテンプレートを公開しました。

どのプラットフォームにおいても、ニュース、エンターテイメントは最もポピュラーなコンテンツとなっています。それで、ビデオプレーヤーと RSS リーダーアプリのテンプレートを用意しました。どちらのテンプレートとも容易にカスタマイズできるよう設計されており、自社のブランド向けのアプリケーションを、開発時間やコストを気にかけることなく、迅速に公開できます。

## ビデオプレーヤーテンプレート

<figure id="figure-1">
	<img src="/articles/opera-tv-store-app-templates/video-app-template.jpg" alt="ビデオプレーヤーテンプレートの使用例のスクリーンショット">
	<figcaption markdown="span">図1: ビデオプレーヤーテンプレートの使用例</figcaption>
</figure>

### 概要

ビデオアプリテンプレートは単なるプレーヤーではなく、ビデオコンテンツをテーマや題目をもとにしたチャンネルごとに分けることができます。さらに内蔵のブックマーク機能により、ユーザーはお気に入りリストに加えた特定のビデオへ簡単に移動することができます。さらにユーザーはビデオを閲覧しながら、次に再生するビデオを選択したり、再生順序をシャッフルすることができます。テンプレートをカスタマイズするにあたり、簡単に編集できる３つの主要なエリア - データ (XML ファイルや既存の API 経由)、画像、色 - があります。

### カスタマイズ

まず始めに、自分で選んだビデオコンテンツやチャンネルを追加したいと思われるでしょう。それらは `video.xml` ファイルにて、以下のように行います:

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

このファイルは `getData()` 関数 (`videotemplate.js` 内) によって読み出されます。それで独自の API や RSS フィードをビデオファイルのソースとして利用したい場合には、関数内のファイル名を変更してください。その場合、さらに同じファイル内の `prepareData()` 関数にてパースのルールを変更する必要もあるでしょう。

外観のカスタマイズ用に、全ての画像は `images` ディレクトリ内に含まれており、`logo.png` のような形で、分かりやすいようなファイル名が付けられています。ここから簡単に画像を独自のロゴに切り替えたり、カラースキームを変更することができます。加えて、アプリケーションのデザインとなるスタイルは `style.css` ファイル (`css` ディレクトリ) にあります。容易にカスタマイズができるよう、フォントと色の定義はファイルの上部に記述されています。

## RSS リーダーテンプレート

<figure id="figure-2">
	<img src="/articles/opera-tv-store-app-templates/rss-app-template.jpg" alt="RSS リーダーテンプレートの使用例のスクリーンショット">
	<figcaption markdown="span">図 2: RSS リーダーテンプレートの使用例</figcaption>
</figure>

### 概要

RSS リーダーテンプレートを使うことで、ニュースや他の定期的に更新されるコンテンツをひとつのアプリケーションとして提供できます。ビデオテンプレート同じように、このテンプレートは TV のリモコンの矢印キーで簡単にコントロールでき、さらにそれぞれのニュース項目や記事を一つずつ自動的に表示するスライドショー機能も備えています。単純な色の変更に加え、動的に生成される HTML の編集など、さらに詳細なカスタマイズを行うことができます。

### カスタマイズ

一番重要なステップは、使用したいフィードを指定することです。これは `DEF_FEEDS` 配列 (`js/config.js` ファイル内) を編集することで行えます。お好きな数だけフィードを追加できます - 外部ドメインにホストされたフィードを含めることができますが、ブラウザのセキュリティ構成により、フィード用のプロキシサーバーを利用する必要があります。以下のリンクにあるダウンロードパッケージ内に、これらの設定方法についての詳細な説明が含まれています。フィードのリストは以下のようになるでしょう:

	var DEF_FEEDS = [{
		url: 'data/data.xml'
	},
	{
		url: 'http://my.opera.com/chooseopera/xml/rss/blog/',
		proxy: true
	}];

さらに、必要であれば `js/config.js` ファイルにてアプリケーションのタイトルを変更したり、プロキシサーバーのアドレスを設定することができます。

	/**
	 * Application main title
	 */
	var APP_TITLE = 'All feeds';

	/**
	 * Proxy URL
	 */
	var PROXY_URL = '/xhrproxy/?_proxy_url=';

`css/common.css` を編集することで、アプリの外観を変更することができます。またそれぞれのフィードアイテムが使用する HTML を編集される場合には、それらは `js/Item.js` ファイル (`TMPL` 内) と `TMPL_CONTENT` 配列に含まれています。

## テンプレートをダウンロード!

アプリケーションテンプレートはこちらからダウンロードできます (ZIP ファイル形式):

- [ビデオプレーヤーテンプレート][3]
- [RSS リーダーテンプレート][4]

[3]: http://apps.tvstore.opera.com/templates/videotemplate.zip
[4]: http://apps.tvstore.opera.com/templates/rssreader.zip

両方の ZIP ファイルには、どのように独自のデータを追加し、テンプレートをカスタマイズする事で、アプリを好みのテイストに近づけることができるかについて、詳細なチュートリアルが含まれています。さらにブランドガイドラインも含まれます。基本的に、これらは機能やレイアウトを編集する必要なく、簡単に見た目の良いアプリを制作できるようデザインされています。しかしテンプレートはいずれもフリーで、オープンソースライセンスの下で配布されているため、お望みの形になるよう、さらに深いレベルまでカスタマイズすることを妨げるものはありません。Opera TV Store に、これらのテンプレートを使用したアプリがたくさん登場することを楽しみにしています！