---
title: 'レスポンシブ・イメージ：ユースケースと入門用のコードサンプル'
authors:
- andreas-bovens
intro: 'レスポンシブ・イメージのマークアップを、ユースケースごとに紹介しています。'
tags:
- html
- media
- picture
- media-queries
- rwd
cover: jpg
language: ja
translator: Masataka Yakura
license: cc-by-3.0
---

<style>
	.feature {
		display:inline-block;
		padding:1px 10px;
		}
	.feature--false {
		background:#EEE;
		}
	.feature--true {
		background:#00A700;
		color:#FFF;
		}
</style>

<!-- HEAD was 94ab40b -->

## はじめに

ついに、本物のレスポンシブイメージが Web で使えるようになりました。HTML だけで完結し、面倒なハックはありません。新しい `<picture>` 要素と、`<img>` に追加された新しい属性が Chrome 38 から使えます（なので Opera でも使えます）。他のブラウザは、[Firefox のナイトリービルドで実装](https://bugzilla.mozilla.org/show_bug.cgi?id=870022)されており、[WebKit では実装中](https://bugs.webkit.org/show_bug.cgi?id=134634)です。

`<picture>` はいくつかのユースケースに対して作られた要素のため、コードがごちゃごちゃすることがあります。提供したいレスポンシブイメージの書き方がどれか調べられるように、この記事ではそれぞれのケースに対応するサンプルコードを紹介します。

## 4つの質問

レスポンシブイメージを使う前には、次の問いに答えるようにしましょう。

- サイトのデザインが変化するのに応じて、画像の**サイズ**も変化させたいか
- 高 **DPI** のディスプレイに最適な画像を提供したいか
- 異なる **MIME** （画像形式）を持つ新しい画像形式を提供したいか
- 状況に応じて、別の**アート**（画、画角）を持つ画像を提供したいか

これから紹介するサンプルコードには、**サイズ**、**DPI**、**MIME**、**アート** のキーワードがひとつもしくは複数つけられています。これらのキーワードは、上の問いにそれぞれ対応しています。それぞれのサンプルコードには簡単な説明もあります。私はサンプルコードを書くにあたって、[夜の Oslo Opera House の写真](http://commons.wikimedia.org/wiki/File:Full_Opera_by_night.jpg)を考えていました。こちらも参考になれば。

<figure block="figure">
	<img elem="media" src="/articles/responsive-images/opera-house.jpg" alt="夜の Oslo Opera House">
	<figcaption elem="caption">夜の Oslo Opera House</figcaption>
</figure>

## とりあえず覚えておくこと

サンプルコードを見る前に、次のことを覚えておきましょう。

- `<picture>` に `<img>` は**必須**で、`<picture>` の最後に書かなければいけません。これを忘れると、何も表示されません。これはアクセシビリティを考えると良いことでしょう。というのは代替テキストを書くところがひとつだけで、しかも昔からある `<img>` だからです。他にも、古いブラウザへのフォールバックとしてもとてもうまく機能します。レスポンシブ・イメージをサポートしないブラウザでは、ただ `<img>` が表示されるからです。
- `<picture>` 要素や、`sizes`、`srcset` 属性は `<img>` 要素の `src` 属性を上書きするものと考えてください。JavaScript で `currentSrc` をチェックすると、ブラウザが読み込んだ画像が何かわかります。古いブラウザはもちろん `<img src>` を使うため、すべてのケースに対応するため `image.currentSrc || image.src` などと書くのが良いでしょう。
- `srcset` や `sizes` に書いたものはヒントであり、命令ではありません。例えば、デバイスピクセル比が 1.5 のデバイスは、1x の画像を使えもすれば、2x の画像も使えます。この選択には、デバイスの性能やネットワーク品質などが考慮されるかもしれません。
- `<img sizes="(max-width: 30em) 100vw …">` は「このメディアクエリーがマッチしたら、画像を `100vw` で読み込む」という意味です。メディアクエリーが複数ある場合は最初にマッチしたものが使われるため、記述する順番には意味があることを覚えておいてください。

## アートディレクション

<span class="feature feature--false">サイズ</span>
<span class="feature feature--false">DPI</span>
<span class="feature feature--false">MIME</span>
<span class="feature feature--true">アート</span>

	<picture>
		<source
			media="(min-width: 1024px)"
			srcset="opera-fullshot.jpg">
		<img
			src="opera-closeup.jpg" alt="Oslo Opera House">
	</picture>

ブラウザのウインドウ幅が 1024 CSS ピクセル以上の場合、全景の写真（`opera-fullshot-**`）が使われます。ウインドウ幅が小さい場合は、ズームアップされた写真（`opera-closeup-**`）が使われます。

## 画像フォーマット出し分け

<span class="feature feature--false">サイズ</span>
<span class="feature feature--false">DPI</span>
<span class="feature feature--true">MIME</span>
<span class="feature feature--false">アート</span>

	<picture>
		<source
			srcset="opera.webp"
			type="image/webp">
		<img
			src="opera.jpg" alt="Oslo Opera House">
	</picture>

WebP をサポートするブラウザでは WebP 画像が、それ以外のブラウザでは JPEG 画像が使われます。

## 画像フォーマット出し分け＋アートディレクション

<span class="feature feature--false">サイズ</span>
<span class="feature feature--false">DPI</span>
<span class="feature feature--true">MIME</span>
<span class="feature feature--true">アート</span>

	<picture>
		<source
			media="(min-width: 1024px)"
			srcset="opera-fullshot.webp"
			type="image/webp">
		<source
			media="(min-width: 1024px)"
			srcset="opera-fullshot.jpg">
		<source
			srcset="opera-closeup.webp"
			type="image/webp">
		<img
			src="opera-closeup.jpg" alt="Oslo Opera House">
	</picture>

ブラウザのウインドウ幅が 1024 CSS ピクセル以上の場合、全景の写真（`opera-fullshot-**`）が使われます。ウインドウ幅が小さい場合は、ズームアップされた写真（`opera-closeup-**`）が使われます。ファイル形式は WebP をサポートするブラウザでは WebP 画像が、それ以外のブラウザでは JPEG 画像が使われます。

## 高 DPI 用画像

<span class="feature feature--false">サイズ</span>
<span class="feature feature--true">DPI</span>
<span class="feature feature--false">MIME</span>
<span class="feature feature--false">アート</span>

	<img
		src="opera-1x.jpg" alt="Oslo Opera House"
		srcset="opera-2x.jpg 2x, opera-3x.jpg 3x">

高 DPI ディスプレイを備えるデバイス上のブラウザでは高解像度の画像が、そうでないブラウザではふつうの画像が使われます。

## 高 DPI 用画像＋アートディレクション

<span class="feature feature--false">サイズ</span>
<span class="feature feature--true">DPI</span>
<span class="feature feature--false">MIME</span>
<span class="feature feature--true">アート</span>

	<picture>
		<source
			media="(min-width: 1024px)"
			srcset="opera-fullshot-1x.jpg 1x,
					opera-fullshot-2x.jpg 2x,
					opera-fullshot-3x.jpg 3x">
		<img
			src="opera-closeup-1x.jpg" alt="Oslo Opera House"
			srcset="opera-closeup-2x.jpg 2x,
					opera-closeup-3x.jpg 3x">
	</picture>

ブラウザのウインドウ幅が 1024 CSS ピクセル以上の場合、全景の写真（`opera-fullshot-**`）が使われます。ウインドウ幅が小さい場合は、ズームアップされた写真（`opera-closeup-**`）が使われます。高 DPI ディスプレイを備えるデバイス上のブラウザでは高解像度の画像が、そうでないブラウザではふつうの画像が使われます。

## 高 DPI 用画像＋画像フォーマット出し分け

<span class="feature feature--false">サイズ</span>
<span class="feature feature--true">DPI</span>
<span class="feature feature--true">MIME</span>
<span class="feature feature--false">アート</span>

	<picture>
		<source
			srcset="opera-1x.webp 1x,
					opera-2x.webp 2x,
					opera-3x.webp 3x"
			type="image/webp">
		<img
			src="opera-1x.jpg" alt="Oslo Opera House"
			srcset="opera-2x.jpg 2x,
					opera-3x.jpg 3x">
	</picture>

高 DPI ディスプレイを備えるデバイス上のブラウザでは 2x もしくは 3x の画像が、そうでないブラウザではふつうの画像が使われます。ファイル形式は WebP をサポートするブラウザでは WebP 画像が、それ以外のブラウザでは JPEG 画像が使われます。

## 高 DPI 用画像＋画像フォーマット出し分け＋アートディレクション

<span class="feature feature--false">サイズ</span>
<span class="feature feature--true">DPI</span>
<span class="feature feature--true">MIME</span>
<span class="feature feature--true">アート</span>

	<picture>
		<source
			media="(min-width: 1024px)"
			srcset="opera-fullshot-1x.webp 1x,
					opera-fullshot-2x.webp 2x,
					opera-fullshot-3x.webp 3x"
			type="image/webp">
		<source
			media="(min-width: 1024px)"
			srcset="opera-fullshot-1x.jpg 1x,
					opera-fullshot-2x.jpg 2x,
					opera-fullshot-3x.jpg 3x">
		<source
			srcset="opera-closeup-1x.webp 1x,
					opera-closeup-2x.webp 2x,
					opera-closeup-3x.webp 3x"
			type="image/webp">
		<img
			src="opera-closeup-1x.jpg" alt="Oslo Opera House"
			srcset="opera-closeup-2x.jpg 2x,
					opera-closeup-3x.jpg 3x">
	</picture>

ブラウザのウインドウ幅が 1024 CSS ピクセル以上の場合、全景の写真（`opera-fullshot-**`）が使われます。ウインドウ幅が小さい場合は、ズームアップされた写真（`opera-closeup-**`）が使われます。高 DPI ディスプレイを備えるデバイス上のブラウザでは高解像度の画像が、そうでないブラウザではふつうの画像が使われます。ファイル形式は WebP をサポートするブラウザでは WebP 画像が、それ以外のブラウザでは JPEG 画像が使われます。

## 画像サイズの変更

<span class="feature feature--true">サイズ</span>
<span class="feature feature--false">DPI</span>
<span class="feature feature--false">MIME</span>
<span class="feature feature--false">アート</span>

	<img
		src="opera-400.jpg" alt="Oslo Opera House"
		sizes="(min-width: 640px) 60vw, 100vw"
		srcset="opera-200.jpg 200w,
				opera-400.jpg 400w,
				opera-800.jpg 800w,
				opera-1200.jpg 1200w">

ブラウザのウインドウ幅が 640 CSS ピクセル以上の場合、写真の幅にはビューポートの幅の 60％が指定されます。それよりも狭いウインドウ幅の場合、写真はビューポート幅いっぱいになります。ブラウザはまた、用意された幅 200px、400px、800px、1200px の写真画像4つから、画面の DPI を考慮した上で適切な画像を選び表示します。

## 画像サイズの変更＋アートディレクション

<span class="feature feature--true">サイズ</span>
<span class="feature feature--false">DPI</span>
<span class="feature feature--false">MIME</span>
<span class="feature feature--true">アート</span>

	<picture>
		<source
			media="(min-width: 1280px)"
			sizes="50vw"
			srcset="opera-fullshot-200.jpg 200w,
					opera-fullshot-400.jpg 400w,
					opera-fullshot-800.jpg 800w,
					opera-fullshot-1200.jpg 1200w">
		<img
			src="opera-closeup-400.jpg" alt="Oslo Opera House"
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-closeup-200.jpg 200w,
					opera-closeup-400.jpg 400w,
					opera-closeup-800.jpg 800w,
					opera-closeup-1200.jpg 1200w">
	</picture>

ブラウザのウインドウ幅が 1280 CSS ピクセル以上の場合、全景の写真（`opera-fullshot-**`）が使われ、幅にはビューポートの幅の 50％が指定されます。ブラウザのウインドウ幅が 640-1279 CSS ピクセルの場合、幅にはビューポートの幅の 60％が指定されます。それよりも狭いウインドウ幅の場合、写真はビューポート幅いっぱいになります。いずれの場合においても、ブラウザは用意された幅 200px、400px、800px、1200px の写真画像4つから、画面の DPI を考慮した上で適切な画像を選び表示します。

## 画像サイズの変更＋画像フォーマット出し分け

<span class="feature feature--true">サイズ</span>
<span class="feature feature--false">DPI</span>
<span class="feature feature--true">MIME</span>
<span class="feature feature--false">アート</span>

	<picture>
		<source
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-200.webp 200w,
					opera-400.webp 400w,
					opera-800.webp 800w,
					opera-1200.webp 1200w"
			type="image/webp">
		<img
			src="opera-400.jpg" alt="Oslo Opera House"
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-200.jpg 200w,
					opera-400.jpg 400w,
					opera-800.jpg 800w,
					opera-1200.jpg 1200w">
	</picture>

ブラウザのウインドウ幅が 640 CSS ピクセル以上の場合、写真の幅にはビューポートの幅の 60％が指定されます。それよりも狭いウインドウ幅の場合、写真はビューポート幅いっぱいになります。ブラウザはまた、用意された幅 200px、400px、800px、1200px の写真画像4つから、画面の DPI を考慮した上で適切な画像を選び表示します。ファイル形式は WebP をサポートするブラウザでは WebP 画像が、それ以外のブラウザでは JPEG 画像が使われます。

## 画像サイズの変更＋画像フォーマット出し分け＋アートディレクション

<span class="feature feature--true">サイズ</span>
<span class="feature feature--false">DPI</span>
<span class="feature feature--true">MIME</span>
<span class="feature feature--true">アート</span>

	<picture>
		<source
			media="(min-width: 1280px)"
			sizes="50vw"
			srcset="opera-fullshot-200.webp 200w,
					opera-fullshot-400.webp 400w,
					opera-fullshot-800.webp 800w,
					opera-fullshot-1200.webp 1200w"
			type="image/webp">
		<source
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-closeup-200.webp 200w,
					opera-closeup-400.webp 400w,
					opera-closeup-800.webp 800w,
					opera-closeup-1200.webp 1200w"
			type="image/webp">
		<source
			media="(min-width: 1280px)"
			sizes="50vw"
			srcset="opera-fullshot-200.jpg 200w,
					opera-fullshot-400.jpg 400w,
					opera-fullshot-800.jpg 800w,
					opera-fullshot-1200.jpg 1200w">
		<img
			src="opera-closeup-400.jpg" alt="Oslo Opera House"
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-closeup-200.jpg 200w,
					opera-closeup-400.jpg 400w,
					opera-closeup-800.jpg 800w,
					opera-closeup-1200.jpg 1200w">
	</picture>

ブラウザのウインドウ幅が 1280 CSS ピクセル以上の場合、全景の写真（`opera-fullshot-**`）が使われ、幅にはビューポートの幅の 50％が指定されます。ブラウザのウインドウ幅が 640-1279 CSS ピクセルの場合、幅にはビューポートの幅の 60％が指定されます。それよりも狭いウインドウ幅の場合、写真はビューポート幅いっぱいになります。いずれの場合においても、ブラウザは用意された幅 200px、400px、800px、1200px の写真画像4つから、画面の DPI を考慮した上で適切な画像を選び表示します。ファイル形式は WebP をサポートするブラウザでは WebP 画像が、それ以外のブラウザでは JPEG 画像が使われます。

## 画像サイズの変更＋高 DPI 用画像

<span class="feature feature--true">サイズ</span>
<span class="feature feature--true">DPI</span>
<span class="feature feature--false">MIME</span>
<span class="feature feature--false">アート</span>

	<img
		src="opera-400.jpg" alt="Oslo Opera House"
		sizes="(min-width: 640px) 60vw, 100vw"
		srcset="opera-200.jpg 200w,
				opera-400.jpg 400w,
				opera-800.jpg 800w,
				opera-1200.jpg 1200w,
				opera-1600.jpg 1600w,
				opera-2000.jpg 2000w">

ブラウザのウインドウ幅が 640 CSS ピクセル以上の場合、写真の幅にはビューポートの幅の 60％が指定されます。それよりも狭いウインドウ幅の場合、写真はビューポート幅いっぱいになります。ブラウザはまた、用意された幅 200px、400px、800px、1200px、1600px、2000px の写真画像6つから、画面の DPI を考慮した上で適切な画像を選び表示します。

## 画像サイズの変更＋高 DPI 用画像＋アートディレクション

<span class="feature feature--true">サイズ</span>
<span class="feature feature--true">DPI</span>
<span class="feature feature--false">MIME</span>
<span class="feature feature--true">アート</span>

	<picture>
		<source
			media="(min-width: 1280px)"
			sizes="50vw"
			srcset="opera-fullshot-200.jpg 200w,
					opera-fullshot-400.jpg 400w,
					opera-fullshot-800.jpg 800w,
					opera-fullshot-1200.jpg 1200w,
					opera-fullshot-1600.jpg 1600w,
					opera-fullshot-2000.jpg 2000w">
		<img
			src="opera-closeup-400.jpg" alt="Oslo Opera House"
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-closeup-200.jpg 200w,
					opera-closeup-400.jpg 400w,
					opera-closeup-800.jpg 800w,
					opera-closeup-1200.jpg 1200w,
					opera-closeup-1600.jpg 1600w,
					opera-closeup-2000.jpg 2000w">
	</picture>

ブラウザのウインドウ幅が 1280 CSS ピクセル以上の場合、全景の写真（`opera-fullshot-**`）が使われ、幅にはビューポートの幅の 50％が指定されます。ブラウザのウインドウ幅が 640-1279 CSS ピクセルの場合、幅にはビューポートの幅の 60％が指定されます。それよりも狭いウインドウ幅の場合、写真はビューポート幅いっぱいになります。いずれの場合においても、ブラウザは用意された幅 200px、400px、800px、1200px、1600px、2000px の写真画像6つから、画面の DPI を考慮した上で適切な画像を選び表示します。

## 画像サイズの変更＋高 DPI 用画像＋画像フォーマット出し分け

<span class="feature feature--true">サイズ</span>
<span class="feature feature--true">DPI</span>
<span class="feature feature--true">MIME</span>
<span class="feature feature--false">アート</span>

	<picture>
		<source
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-200.webp 200w,
					opera-400.webp 400w,
					opera-800.webp 800w,
					opera-1200.webp 1200w,
					opera-1600.webp 1600w,
					opera-2000.webp 2000w"
			type="image/webp">
		<img
			src="opera-400.jpg" alt="Oslo Opera House"
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-200.jpg 200w,
					opera-400.jpg 400w,
					opera-800.jpg 800w,
					opera-1200.jpg 1200w,
					opera-1600.jpg 1600w,
					opera-2000.jpg 2000w">
	</picture>

ブラウザのウインドウ幅が 640 CSS ピクセル以上の場合、写真の幅にはビューポートの幅の 60％が指定されます。それよりも狭いウインドウ幅の場合、写真はビューポート幅いっぱいになります。ブラウザはまた、用意された幅 200px、400px、800px、1200px、1600px、2000px の写真画像6つから、画面の DPI を考慮した上で適切な画像を選び表示します。ファイル形式は WebP をサポートするブラウザでは WebP 画像が、それ以外のブラウザでは JPEG 画像が使われます。

## 画像サイズの変更＋高 DPI 用画像＋画像フォーマット出し分け＋アートディレクション

<span class="feature feature--true">サイズ</span>
<span class="feature feature--true">DPI</span>
<span class="feature feature--true">MIME</span>
<span class="feature feature--true">アート</span>

	<picture>
		<source
			media="(min-width: 1280px)"
			sizes="50vw"
			srcset="opera-fullshot-200.webp 200w,
					opera-fullshot-400.webp 400w,
					opera-fullshot-800.webp 800w,
					opera-fullshot-1200.webp 1200w,
					opera-fullshot-1600.webp 1600w,
					opera-fullshot-2000.webp 2000w"
			type="image/webp">
		<source
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-closeup-200.webp 200w,
					opera-closeup-400.webp 400w,
					opera-closeup-800.webp 800w,
					opera-closeup-1200.webp 1200w,
					opera-closeup-1600.webp 1600w,
					opera-closeup-2000.webp 2000w"
			type="image/webp">
		<source
			media="(min-width: 1280px)"
			sizes="50vw"
			srcset="opera-fullshot-200.jpg 200w,
					opera-fullshot-400.jpg 400w,
					opera-fullshot-800.jpg 800w,
					opera-fullshot-1200.jpg 1200w,
					opera-fullshot-1600.jpg 1800w,
					opera-fullshot-2000.jpg 2000w">
		<img
			src="opera-closeup-400.jpg" alt="Oslo Opera House"
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-closeup-200.jpg 200w,
					opera-closeup-400.jpg 400w,
					opera-closeup-800.jpg 800w,
					opera-closeup-1200.jpg 1200w,
					opera-closeup-1600.jpg 1600w,
					opera-closeup-2000.jpg 2000w">
	</picture>

ブラウザのウインドウ幅が 1280 CSS ピクセル以上の場合、全景の写真（`opera-fullshot-**`）が使われ、幅にはビューポートの幅の 50％が指定されます。ブラウザのウインドウ幅が 640-1279 CSS ピクセルの場合、幅にはビューポートの幅の 60％が指定されます。それよりも狭いウインドウ幅の場合、写真はビューポート幅いっぱいになります。いずれの場合においても、ブラウザは用意された幅 200px、400px、800px、1200px、1600px、2000px の写真画像6つから、画面の DPI を考慮した上で適切な画像を選び表示します。ファイル形式は WebP をサポートするブラウザでは WebP 画像が、それ以外のブラウザでは JPEG 画像が使われます。

## まだまだあるよ！

紹介したサンプルコードの意味がわからなくても心配しないでください！[ネイティブサポートされたレスポンシブ・イメージの紹介記事](https://dev.opera.com/articles/ja/native-responsive-images/)では `<picture>` とレスポンシブ・イメージについて詳細に解説しています。すべてのブラウザがサポートするのはまだ先ですが、上司やクライアントの帯域を節約する準備や、自分のサイトをより速く表示させるようにしておきましょう。
