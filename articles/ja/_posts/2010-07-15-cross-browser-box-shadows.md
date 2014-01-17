---
title: クロスブラウザな CSS box-shadow
authors:
- rustam-gaffanov
tags:
- box-shadow
- css
- css3
- ie-support
layout: article
---

## はじめに

陰影は要素に深みを与えるためにウェブや印刷のデザインでよく使われます。従来ウェブコンテンツで陰影をつけるには、画像編集ソフトウェアで作成され CSS で背景として指定された複数の画像が必要とされていました。確かにこの手法は目的を達成させますが、同時に画像作成が大変だったり、一つの要素には一つの画像しか当てられないことによりネストされる div 要素でマークアップが膨大になったりします。

しかし、現在では CSS3 が `box-shadow` プロパティをサポートし、これを使って私たちはありとあらゆるブロックレベル要素に複数の陰影をつけるようプログラムすることができるようになりました。これは画像編集にかけていた時間の短縮や、コードが汚くなるほどにネストされた div 要素をなくすことことにつながります。ところが、これは Internet Explorer ではサポートされていません。では、どうするのが最善でしょうか？

この記事では、 `box-shadow` を基本とし IE フィルターを用いたフォールバックも提供するクロスブラウザな解決法として考えられるものの一つを紹介します。尚ここではこのプロパティの使い方については議論しないものとします(これらは [CSS3 borders, backgrounds and box-shadows][1] で優れた解説がなされています)。

[1]: /articles/css3-border-background-boxshadow/

目次:

- [ブラウザによるネイティブなサポート](#internalSupport)
- [IE フィルター](#ieAnalog)
- [IE と他のブラウザで陰影をつける](#IEandNormal)
- [例を組み合わせる](#realization)
- [内側の影](#inner)
- [要旨](#summary)

著者による注釈: 読者の中には、私たちが IE フィルターを使った例を通して何をしたいのか疑問に思う方もおれらるでしょう。実際、 IE フィルターはページを重くするだけでなく、プロプライエタリで IE 特有のオープンではない標準です。 IE フィルターの一般的な用法の多くは CSS3 で取り扱うことができます。もしあなたが IE (`box-shadow` を 9 は対応する予定ですが、 8 以下は対応しません) で陰影をつけることを特に必要としていなかったり、 JavaScript による解決法を望むのであれば、それは素晴らしいことです。しかし、あなたがすべてのブラウザにおけるユーザーインターフェースの一貫性を強く必要としていたり、 JavaScript を使わないで解決したかったりする場合はどうでしょう？私たちは IE フィルターを多用することを決して是認しません。しかし、実利的な視点から見て、これは状況によってはよいクロスブラウザな解決法となります。

## ブラウザによるネイティブなサポート {#internalSupport}

CSS3 `box-shadow` プロパティは殆どのモダンブラウザがよく対応していますが、ページでこれに対応するには次のすべてのプロパティの変化形を使う必要があります:

- Opera と IE9 及びそれ以上に対応するのに必要な、接頭辞のない W3C 公式版のプロパティ: `box-shadow`
- Firefox に対応するのに必要な、 `-moz-` ベンダー接頭辞をつけた形: `-moz-box-shadow`
- WebKit を採用したブラウザ(例えば Google Chrome や Apple Safari) に対応するのに必要な、 `-webkit-` ベンダー接頭辞をつけた形: `-webkit-box-shadow`
- IE 8 以下はこれらのプロパティに全く対応しません。したがって、影をつけないことにするか、打開策を開発する必要があります。私の解決法を次に示しましょう。

ブラウザによるサポートのまとめ:

<table>
<thead>
<tr>
	<th></th>
	<th>Internet Explorer</th>
	<th>Firefox</th>
	<th>Safari</th>
	<th>Chrome</th>
	<th>Opera</th>
</tr>
</thead>
<tbody>
<tr>
	<td>かなり前</td>
	<td>6.0</td>
	<td>3.0</td>
	<td>3.2</td>
	<td>3.0</td>
	<td>9.6</td>
</tr>
<tr>
	<td>最近</td>
	<td>7.0</td>
	<td>3.5</td>
	<td>4.0</td>
	<td>4.0</td>
	<td>10.10</td>
</tr>
<tr>
	<td>現在</td>
	<td rowspan="2">8.0</td>
	<td rowspan="2">3.6</td>
	<td rowspan="2">5.0</td>
	<td rowspan="2">5.0</td>
	<td rowspan="2">10.60</td>
</tr>
<tr>
	<td>近い将来 (2010年末)</td>
</tr>
<tr>
	<td>将来 (2010年以降)</td>
	<td>9.0</td>
	<td>4.0</td>
	<td>5.*</td>
	<td>6.0</td>
	<td>11.0</td>
</tr>
</tbody>
</table>

IE9 に関する情報は IE9 Developer Preview 3 を元にしています。

## IE フィルター {#ieAnalog}

私は最近 IE の CSS フィルタについて多くのことを学びました。まず最初に、 [blur フィルター][8] が IE で要素をぼやかすのにつかえます。 簡単な `<div>` 要素を使った例を見てみましょう:

[8]: http://msdn.microsoft.com/ja-jp/library/ms532979(VS.85).aspx

	<div></div>

	div {
		width:100px;
		height:100px;
		background:blue;
	}

これは 図1 のようになります。

<figure>
	<img src="/articles/cross-browser-box-shadows/IEbefore.png">
	<figcaption markdown="span">図1: 固定領域を持つ簡単な `<div>` 要素</figcaption>
</figure>

次のフィルターを使って、 IE で半径 5 ピクセルをぼやかすことができます:

	<div></div>

	div {
		width:100px;
		height:100px;
		background:blue;
		filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=5);
		-ms-filter:'progid:DXImageTransform.Microsoft.Blur(pixelradius=5)';
	}

これが適用されると 図2 のような効果がでます。

<figure>
	<img src="/articles/cross-browser-box-shadows/IEblured.png">
	<figcaption markdown="span">図2: blur フィルターが適用された簡単な `<div>` 要素</figcaption>
</figure>

## IE と他のブラウザで陰影をつける {#IEandNormal}

この方法は IE でボックスの陰影を作るのに使えます。影をつけたい内容と同じ大きさの「幽霊」 `<div>` 要素をつけ足します。 `box-shadow` に対応しているブラウザではそれは隠されてスクリーン上には表示されません。 IE では、それが内容の裏側に配置されてぼやかしが入り、陰影として動作します。

モダンなブラウザでは、次の XHTML と CSS で陰影を作ることができます:

	<div class="baseBlock"></div>

	.baseBlock {
		width:100px;
		height:100px;
		background:#f9f;
		-webkit-box-shadow:10px 10px 5px #000;
		-moz-box-shadow:10px 10px 5px #000;
		box-shadow:10px 10px 5px #000;
	}

この効果を IE で再現するには、以下のようにして特別な「幽霊」 `<div>` 要素をつけ足します:

	<div class="ieBlock"></div>

	.ieBlock{
		height:100px;
		width:100px;
		background:#000;
		filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=10);
		-ms-filter:"progid:DXImageTransform.Microsoft.Blur(pixelradius=10)";
	}

これは 図3 のようになります:

<figure>
	<img src="/articles/cross-browser-box-shadows/ieShadowForComparison.png">
	<figcaption markdown="span">図3: IE における陰影(影のみが単独で表示されており内容は含まれない)</figcaption>
</figure>

## 例を組み合わせる {#realization}

このテクニックがどのように作用するかがわかる [普通の陰影の例][12] と [内側の陰影の例][13] を用意しました。以下に基本的なテクニックに用いた完全なコードの一覧を示します。 一つ目は「幽霊」 `<div>` 要素と主となる内容を一緒ににした HTML コードの例です:

[12]: /articles/cross-browser-box-shadows/example1.zip
[13]: /articles/cross-browser-box-shadows/example2.zip

	<div class="baseBlock">
		<div class="baseBlockIn">
			Lorem ipsum dolor…
		</div>
		<div class="ieShadow"></div>
	</div>

`<div class="baseBlock">` は内容ブロックのコンテナです。 `<div class="baseBlockIn">` は `box-shadow` を適用する内容コンテナです(これは IE7 における z-index の問題を回避するのに役立ちます)。 `<div class="ieShadow"></div>` は IE で陰影をつけるためにぼやかされる「幽霊」ブロックです。

次の節では CSS の最初のブロックを示しています。これは、内容を描画するあらゆるブラウザで適用されます:

	/* CSS for all browsers */
	.baseBlock{
		width:180px;
		-webkit-box-shadow:10px 10px 5px #444;
		-moz-box-shadow:10px 10px 5px #444;
		box-shadow:10px 10px 5px #444;
	}

	.baseBlockIn{
		/*	Content part specially separated
			for fixing problems with z-index in IE7 */
		padding:10px 15px;
		background:#f9f;
	}

	.ieShadow{
		display:none;
	}

では、対応しているブラウザ向けに `box-shadow` を設定し、 IE 以外のブラウザから IE 専用の陰影を隠しましょう。以下のコードは IE 専用の CSS です(これを IE の条件つきコメントを使って適用します):

	/*	CSS for IE versions 8 and below
		through conditional comments */
	.baseBlock{
		position:relative;
		z-index:3;
	}

	.baseBlockIn{
		position:relative;
		/*	z-index for content must be bigger
			then z-index for shadow */
		z-index:4;
	}

	.ieShadow{
		display:block;
		position:absolute;
		z-index:2;
		top:5px;
		left:5px;
		right:-5px;
		bottom:-5px;
		filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=5);
		-ms-filter:'progid:DXImageTransform.Microsoft.Blur(pixelradius=5)';
		background-color:#444;
	}

ここで `baseBlock` は内容と陰影の位置を決定するコンテキストです。内容(`.baseBlockIn` `<div>` 要素)には陰影(`.ieShadow` `<div>` 要素)より大きな z-index が与えられています。後者は絶対位置づけで位置が決定されており、陰影が背景色と blur フィルターを使ってつけられています。

IE の `left`, `top`, `right` and `bottom` の各値の算出にはいくつかおかしな点があり、これは `<div>` 要素の陰影に影響を与えます:

- `left` は X-offset から blur の値を引いた値になります;
- `top` は Y-offset から blur の値を引いた値になります;
- `right` は blur の値から X-offset を引いた値になります;
- `bottom` は blur の値から Y-offset を引いた値になります。

よってコードでは、 `box-shadow:10px 10px 5px #444;` によって作られた陰影のオフセットを模倣するように位置づけをする必要があります:

- `left` は X-offset から blur の値を引いた値になります; 10 – 5 = 5
- `top` は Y-offset から blur の値を引いた値になります; 10 – 5 = 5
- `right` は blur の値から X-offset を引いた値になります; 5 – 10 = –5
- `bottom` は blur の値から Y-offset を引いた値になります。 5 – 10 = –5

これで完了です。最終的には 図4 に示されたものと似たものになります:

<figure>
	<img src="/articles/cross-browser-box-shadows/outsetPrimer.png">
	<figcaption markdown="span">図4: モダンなブラウザと従来バージョンの IE における陰影を示している最終的な例</figcaption>
</figure>

## 内側の影 {#inner}

内側の影を作るのにもIE を含めた複数のブラウザで似たようなテクニックが使えます。違いは `overflow: hidden;` が影がコンテナの外側に溢れ出さないように切り取るために使われていることと、条件つき CSS における `background-color` をメインの CSS における `box-shadow` の色と統一させてある点です。では上と同様にまずは HTML のコードを示します:

	<div class="shadowBoxOut">
		<div class="shadowBox">
		<div class="ieShadow"></div>
		<div class="content">
			Lorem ipsum dolor…
		</div>
		</div>
	</div>

次にすべてのブラウザが使う CSS を示します:

	/* CSS for all browsers */
	.shadowBoxOut{
		border:1px solid #000;
		width:180px;
	}

	.shadowBox{
		background:#fff;
		padding:10px 15px;
		color:#000;
		-webkit-box-shadow:inset 30px 30px 20px #888;
		-moz-box-shadow:inset 30px 30px 20px #888;
		box-shadow:inset 30px 30px 20px #888;
	}

	.ieShadow{
		display:none;
	}

そして最後に、条件つきコメントを使って IE だけに適用する条件つき CSS を示します:

	/*	CSS for IE versions 8 and below
		through conditional comments */
	.shadowBox{
		background:#888;
		/* Background colour changed to shadow colour */
		position:relative;
		overflow:hidden;
		zoom:1;
		border-right:1px solid transparent;
		/*	Fix problem with shadow overlay
			above content in IE8 */
		*border-right:0;
	}

	.ieShadow{
		display:block;
		position:absolute;
		top:10px;
		left:10px;
		bottom:-10px;
		right:-10px;
		background:#fff;
		/*	Here must be set of base
			layer background color */
		filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=20);
		-ms-filter:'progid:DXImageTransform.Microsoft.Blur(pixelradius=20)';
	}

	.content{
		position:relative;
	}

先ほどと同じ IE における影をつくる `<div>` 要素の `left`, `top`, `right`, `bottom` の算出におけるおかしな点が、この場合も適用されます。

上のコードは 図5 に示されたような描画を与えます。

<figure>
	<img src="/articles/cross-browser-box-shadows/insetPrimer.png">
	<figcaption markdown="span">図5: モダンブラウザと従来バージョンの IE での陰影を示している内側の影の最終的な例</figcaption>
</figure>

## 要旨 {#summary}

この記事を通して、 `box-shadow` を基本とし IE フィルターで IE にも対応した、ブロックレベルの要素に陰影をつけるクロスブラウザな解決法について見てきました。この方法で以下のブラウザで陰影をつけることができます:

- Apple Safari 3+
- Google Chrome 2+
- Microsoft Internet Explorer 7+
- Mozilla Firefox 3.5+
- Opera 10.50+

このアプローチの利点:

- 画像を使わない。つまり画像編集ソフトを使った大変な作業が減り、 HTTP リクエストの数が減り、パフォーマンスが向上する;
- JavaScript を必要としない;
- 陰影には好きな色が使える。

欠点は一つ、 `top`/`bottom` プロパティ及び `left`/`right` プロパティには IE6 が対応していないということで、このテクニックは高さが固定された要素に適用されない限り、 IE6 では正しく動かないことがあります。この場合、 `top`/`bottom` を `top`/`height` に、 `left`/`right` を`left`/`width` に置き換えることで上手く動作させることができます。