---
title: Viewport メタタグと `@viewport` 規則
authors:
- andreas-bovens
tags:
- devicepixelratio
- media-queries
- mobile
- opera-mobile
- target-densitydpi
- viewport
license: cc-by-3.0
layout: article
---

## はじめに

Opera のモバイル製品ではずいぶん昔から viewport メタタグをサポートしています。Opera Mobile 11 になって viewport 実装はより堅牢なものになり、また、異なる画面密度に対応する新しいメカニズムもサポートしました。さらには、私たちが提出した [@viewport 規則の提案][1] もサポートしています。また、Opera Mini 6 でも、基本的な viewport メタタグのサポートが行われました。

[1]: http://dev.w3.org/csswg/css-device-adapt/#the-viewport-rule

更新（2012年5月27日）： Internet Explorer 10 が [-ms-viewport をサポート][2]するようになりました。

[2]: http://msdn.microsoft.com/en-us/library/ie/hh708740(v=vs.85).aspx

viewport はあなたのサイトをモバイルに最適化する際に使える技術です。Opera のサポート向上が行われた今、この viewport についていくつかある仕組みを説明するにはまたとないタイミングです。

## モバイルブラウザの Web ページ処理

<figure>
	<a href="/articles/an-introduction-to-meta-viewport-and-viewport/nytimes.jpg"><img src="/articles/an-introduction-to-meta-viewport-and-viewport/nytimes_small.jpg" alt="スクリーンショット: New York Times の Art ページ"></a>
	<figcaption markdown="span">図1: New York Timesのサイトは、画面内にうまく収まるように縮小されて表示される。</figcaption>
</figure>

最近のモバイルブラウザはふつうの Web ページをなんの問題もなく描画できます。モバイルブラウザはページをデバイスの画面内、もしくは表示領域内に収まるように拡大縮小します。ユーザーは指やキーパッド、トラックボールなど端末が持つ何らかの入力方法で、ページの一部を拡大し、そして見回すことができます。

Opera Mobile 11 ももちろん、この振る舞いを踏襲しています。ふつうの Web ページを幅 850px の表示領域 (viewport) で描画します。「幅 850px の表示領域」とは、そのページをウィンドウ幅が 850px のデスクトップブラウザで表示させているものと考えれば分かりやすいでしょうか。そして、幅 850px の表示領域として扱ったページを、モバイルブラウザが持つ実際の表示領域にあわせて縮小表示したものが、最終的にあなたが見るものになります。

読み込むページが幅 850px よりも大きい場合、たとえば図1で示した [www.nytimes.com][5] のようなページの場合、Opera Mobile はひとつ処理を追加します。幅 850px では収まらない部分が出てしまわないように、さらにズームアウトするのです。こうして、画面領域にうまく収まるように縮小が行われます。

[5]: http://www.nytimes.com/

このページ処理やインタラクションは多くのサイトで問題なく機能します。しかし、プラットフォームネイティブのルック＆フィールを持つモバイルに最適化された Web ページを作ったため、ページの表示サイズや拡大縮小をコントロールしたい場合があります。ここで登場するのが、viewport メタタグと @viewport 規則です。これらを使うと、幅 850px という規定の viewport 値を上書きする、viewport の最大高を決めるなど、あなたの望むとおりにブラウザの表示やズームの挙動を操作できるのです。

## viewport の構文

デフォルトの viewport 設定は、viewport メタタグをページの `<head>` 内に記述することで上書きできます。viewport メタタグの構文がどのようなものか説明するため、すこし複雑な例をお見せしましょう。

	<meta name="viewport" content="width=320, initial-scale=0.5">

メタタグの代わりに、@viewport 規則を使うこともできます。 (ただしこの規則は現時点で Opera Mobile 11 でしか動作しません。`-o-` 接頭辞がついているのも試験実装だからです。) 今の例を @viewport 規則で書き直すと、次のようになります。

	@-o-viewport {
		width: 320px;
		zoom: 0.5;
	}

上記の例をはじめ、この記事では `-o-` 接頭辞つきの CSS コードを紹介しています。わかりやすさと読みやすさを考慮し、他のベンダー接頭辞つきのコードは含めていません。しかし、接頭辞のついた CSS コードを実際のサイトで使う際には、`-webkit-`, `-moz-`, `-ms-` といった他のベンダーの接頭辞つきコードも含めるべきです。もちろん、接頭辞なしの正式なコードも忘れないでください。

さて、上記の例を見比べると分かるとおり、@viewport 規則は CSS ですが、**viewport メタタグは CSS ではありません**。つまり、viewport メタタグで viewport 値を区切る際には、セミコロンではなくカンマを使わないといけません。いくつかのユーザーエージェントはセミコロンも処理しますが、そうでないものではセミコロンを区切りとして認識せず、間違って解釈される、もしくはすべて無視してしまうことも考えられます。viewport メタタグではセミコロンではなくカンマで区切ることを、よく覚えておいてください。

## viewport の幅を設定する (`width`)

では、もう少し細かいところを見ていきましょう。viewport の幅を設定してみます。

### 任意のピクセル

何か値を指定しましょう。先程の例では、viewport の幅を 320px に設定しています。

	<meta name="viewport" content="width=320">

@viewport 規則ではこうです。

	@-o-viewport {
		width: 320px;
	}

この設定は、ブラウザが幅 320px のキャンバスにページを描画し、表示可能な画面領域に収まるように調整することを意味します。画面領域が幅 360px の場合 (図2)、ページは 1.125 倍に拡大されます。もし画面領域が幅 240px の場合、ページは 0.75 倍に縮小されます。

<figure>
	<a href="/articles/an-introduction-to-meta-viewport-and-viewport/specific-width.jpg"><img src="/articles/an-introduction-to-meta-viewport-and-viewport/specific-width_small.jpg" alt="スクリーンショット: viewport を幅 320px と設定したページ"></a>
	<figcaption markdown="span">図2: 360×600px の画面で、[viewport の幅を 320px に設定したページ][8] を表示したもの。</figcaption>
</figure>

[8]: http://people.opera.com/andreasb/viewport/ex01.html

今ある Web ページの幅がモバイル端末においても広すぎない場合に、特定のピクセル数で値を指定すると、とても簡単にモバイル用の調整が行えます。たとえば、あなたのページが真ん中寄せで、幅 500px のコンテナに収まるレイアウトだとすると、viewport の幅を 500px にすればコンテナの外の領域が飛び去り、内容が画面領域にうまく収まってくれます。もし左と右に少し空白が欲しい場合は、550px など少し大きめのピクセル数を指定すればよいでしょう。

### 端末の幅 (device-width)

ピクセル数を指定する代わりに、端末の画面幅と同じ幅を viewport の幅とする方法もあります。そして私たちは、ピクセル数よりもこちらを使うことをおすすめします。

	<meta name="viewport" content="width=device-width">

@viewport 規則ではこうです。

	@-o-viewport {
		width: device-width;
	}

この設定は、ブラウザに_「拡大や縮小はしなくていいから、端末の画面幅いっぱいを viewport の幅にしてくれ」_と伝えているようなものです。たとえばあなたの端末の画面が幅 360px だった場合、viewport は幅 360px になります (図3)。画面が幅 480px の場合、viewport はとうぜん 480px になります。「端末の幅で表示する」ことがピンとこない場合、今お使いのブラウザのウィンドウ幅を縮めて、いろんな幅でページを見てみるといいでしょう。ページが拡大縮小されませんよね。そう、そういうことなんです。

端末の幅で設定するとき、どんな端末でも綺麗に表示されるように、リキッドレイアウトの手法やメディアクエリーを使いたくなるのではないでしょうか。じゃあ、viewport とメディアクエリーを組み合わせて使うとどうなるか、少しあとで見てみることにしましょう。

<figure>
	<a href="/articles/an-introduction-to-meta-viewport-and-viewport/device-width.jpg"><img src="/articles/an-introduction-to-meta-viewport-and-viewport/device-width_small.jpg" alt="スクリーンショット: viewport を device-width と指定したページ"></a>
	<figcaption markdown="span">図3: 360×600px の画面で、[viewport の幅を `device-width` に設定したページ][11] を表示したもの。</figcaption>
</figure>

[11]: http://people.opera.com/andreasb/viewport/ex02.html

## その他の viewport プロパティ

`width` の他にも知っておくべき viewport プロパティがあります。では、ひとつずつ見ていきましょう。

### viewport の高さ (`height`)

`width` プロパティだけでなく、高さを設定するプロパティもあります。値には `width` と同じように特定のピクセルを指定することや、`device-height` を使うことができます。しかし、`height` を使う機会はあまりないでしょう。`height` プロパティは横にパンしてほしくないページや、横にだけパンしてほしいページに便利ですが、そういったページがあまりないからです。

次の例では、キャンバスをブラウザのウィンドウが表示する範囲に限定しています。この場合、パンすることはできません。

	<meta name="viewport" content="width=device-width, height=device-height">

@viewport 規則ではこうです。

	@-o-viewport {
		width: device-width;
		height: device-height;
	}

### 初期ズーム倍率 (`initial-scale`)

<figure>
	<a href="/articles/an-introduction-to-meta-viewport-and-viewport/initial-scale.jpg"><img src="/articles/an-introduction-to-meta-viewport-and-viewport/initial-scale_small.jpg" alt="スクリーンショット: initial-scale を 2 に設定したページ"></a>
	<figcaption markdown="span">図4: [`initial-scale` を 2 に設定したページ][14]。</figcaption>
</figure>

[14]: http://people.opera.com/andreasb/viewport/ex03.html

幅や高さだけでなく、表示領域のズーム倍率を指定したいと思った方はいるでしょうか。viewport の幅を端末の幅とし、2 倍にズームさせた状態で表示したい場合、次のように `initial-scale` プロパティを追加します。

	<meta name="viewport" content="width=device-width, initial-scale=2">

@viewport 規則ではこうです。

	@-o-viewport {
		width: device-width;
		zoom: 2;
	}

図4はその表示例です。あまり `initial-scale` を設定する意味があるように思えないデモには見えますが、ここで言いたいのは、ページがロードされたとき内容が2倍の大きさで表示されるということです。

さて、viewport の幅、高さ、初期ズーム倍率のどれかが指定された時点で、ブラウザはセットされていない値を自動的に推測します。たとえば、幅に `device-width` を指定したとき、初期ズーム倍率は自動的に 1 と判断されます。反対に、初期ズーム率を 1 と指定したとき、幅は端末の幅になります。 ですから、推測されない値を利用したい場合以外で、プロパティを複数指定しても特に意味はありません。

### 拡大縮小の制約

ユーザーがどこまでズームできるかを制御したい場合は、`maximum-scale` と `minimum-scale` を記述します。

	<meta name="viewport" content="width=device-width, maximum-scale=2, minimum-scale=0.5">

@viewport 規則ではこうです。

	@-o-viewport {
		width: device-width;
		max-zoom: 2;
		min-zoom: 0.5;
	}

ズームを無効化することもできます。しかし、ズームは多くの人にとって重要なアクセシビリティ機能であることを忘れないでください。ですから、ズームを無効化するのは何らかのゲームやアプリケーションなど、ほんとうに必要な場合だけにとどめるべきです。[`<canvas>` ゲームのデモ][15] で使われているコードを紹介します。

[15]: http://www.splintered.co.uk/experiments/archives/paranoid_0.3/

	<meta name="viewport" content="width=372, user-scalable=no">

@viewport 規則ではこうです。

	@-o-viewport {
		width: 372px;
		user-zoom: fixed;
	}

## メディアクエリーと組み合わせる

メディアクエリーを知らないという方は、特定の環境下で適用される CSS を書けるという条件つき CSS の仕組みと考えてください。メディアクエリーを使うことで、多様な画面サイズにサイトを最適化させることや、端末の利用環境に応じてレイアウトを調整もしくは大きく変更させることなどもできるのです。

次の例では、viewport の幅が 360px 以下の場合に、すべての画像をコンテナ幅の 96% の大きさに縮小し、また背景を黒に変更しています。こうすることで小さい画面でも画像が真ん中寄せで表示され、黒い背景によって画像がハイライトされ、なにか特別なことが起こっていると伝えられるわけです。

	@media screen and (max-width: 360px) {
		img {
			width: 96%;
			background: #000;
		}
	}

ここで注意しなければならないのが、viewport を明示的に指定しなければこのメディアクエリーは Opera Mobile で使われません。そう、Opera Mobile 11 の規定の設定により、ページが幅 850px の viewport とみなされ、幅 360px 以下 の viewportと設定したメディアクエリーが適用されないのです。

これを解決するため、viewport の幅を `device-width` に設定します。

	<meta name="viewport" content="width=device-width">

@viewport 規則ではこうです。

	@-o-viewport {
		width: device-width;
	}

こうすることで、viewport の幅が画面幅と同じになり、ページの内容が拡大されます。そして、幅 360px 以下の環境においてメディアクエリーが適用されます。Nokia 5800 (縦持ちで幅 360px) の Opera Mobile 11 は画像をコンテナ幅の 96% で表示し、第二世代 iPod touch の Safari (幅 320px) と同じようになります。いっぽう、幅 480px な環境においてはこのメディアクエリーが適用されません (図5)。

<figure>
	<a href="/articles/an-introduction-to-meta-viewport-and-viewport/media-queries.jpg"><img src="/articles/an-introduction-to-meta-viewport-and-viewport/media-queries_small.jpg" alt="スクリーンショット: メディアクエリーが適用される環境と、そうでない環境"></a>
	<figcaption markdown="span">図5: [メディアクエリーと viewport を組み合わせた例][18] を表示したもの。左にある幅 480px なブラウザではメディアクエリーが適用されず、右にある幅 320px なブラウザでは適用されている。異なる画面サイズや異なる形状でのレイアウト対応に利用できる。</figcaption>
</figure>

[18]: http://people.opera.com/andreasb/viewport/ex04.html

この例ではメディアクエリーに `max-device-width` ではなく `max-width` を使っています。`max-device-width` も機能するはずですが、こちらは画面の幅を見ているため、デスクトップでの確認が面倒です。その点、`max-width` (もしくは `min-width`) はブラウザのウィンドウを縮めるとメディアクエリーが適用されるため開発に便利です。また、小さなウィンドウであなたのサイトを見ているユーザーにも嬉しいことでしょう。

viewport とメディアクエリーを組み合わせることで、_ひとつの_サイトがデスクトップとモバイルで機能するなんてことも可能になります。実際にこの手法を採用した Web サイトもあります。[mediaqueri.es gallery][19] というサイトにまとめられているので、そこからインスピレーションを得られますよ。

[19]: http://mediaqueri.es/

## 高 DPI スクリーンへの対応

今度は、高 DPI スクリーンに最適化する方法をみていきましょう。

### ピクセルは思った通りではない

最新のモバイル端末は、とても高い DPI (dots per inch) を備えています。1ピクセルを認識するのも困難なほどですから、画面の忠実度も相当高いです。しかし問題もあり、ピクセルが小さすぎるため、そのままでは Web コンテンツもとても小さくなってしまいます。11px のテキストが非常に小さくなり、デスクトップではふつうに見える画像もサムネイル程度になってしまいます。このため、Opera Mobile 11 は高 DPI 端末においてズーム倍率のデフォルトを 100% 以上にしています。HTC Desire の場合、デフォルトの倍率は 160% です。

これはつまり、ピクセルがこれまで思っていたものでなくなるということです。Web において ピクセルとは CSS ピクセルを意味しています。そして、信じられないかもしれませんが、CSS ピクセルは相対的な長さを表す単位なのです。1 CSS ピクセルが複数のデバイスピクセルから構成されることもあるのです。HTC Desire 上の Opera Mobile 11 の場合、1 CSS ピクセルは 1.6 デバイスピクセルで表されます。

### 画像を綺麗に保つ

100% 以上のズーム倍率により、読みやすさは担保されました。しかしコンテンツの忠実度はどうでしょうか？フォント、ボーダー、SVG はベクターベースなので綺麗に描画されます。しかし、ラスターベースの画像では綺麗に見えない可能性があります。これに対処する簡単な方法として、高解像度な画像を用意し、たとえばそれを半分の大きさで表示すれば良いのです。ズーム倍率と解像度が高 DPI な環境でも一緒に増加しますから、画像が綺麗に保たれるのです。たとえば、次のようなマークアップを考えてみてください。

	<img src="500px_image.jpg" width="250">

viewport の幅が `device-width` である場合、第二世代 iPod touch の Safari では画像が 250 デバイスピクセルで表示されます。HTC Desire 上の Opera Mobile 11 では、画像が 400 デバイスピクセル (250×160% = 400) で表示されます。デフォルトのズーム倍率が 200% な Android 端末のブラウザであれば、画像は 500 デバイスピクセル (250×200% = 500) で表示されます。画像はどの端末でも綺麗なままです！

### 画面密度のメディアクエリー

大きな画像を用意するだけでなく、特定の画面密度に対しチューニングを施したい場合、`device-pixel-ratio` というメディアクエリーの媒体特性を利用します。これによって特定の画面密度に CSS を適用することができます。次の CSS は [500×500px の背景画像][20] を `background-size` で 250px として表示します。こうすることで、デフォルトのズーム倍率が 150% (3÷2 * 100% = 150%) 以上となる高 DPI 端末、たとえば HTC Desire (160%) でも背景画像が綺麗に表示されます。コードは次のようになります、またそのスクリーンショットを 図6 で紹介します。

[20]: http://people.opera.com/andreasb/viewport/seamless.jpg

	@media screen and (-o-min-device-pixel-ratio: 3/2) {
		body {
			background-size: 250px;
		}
	}

Opera は `device-pixel-ratio` の値として ratio 値 (3/2 など) のみをとります。一方、Android のブラウザは数値 (1.5 など) を受けつけます。現時点ではこの媒体特性はベンダー接頭辞をつけなければ動作しませんから、それぞれに違う値を指定するだけです。

<figure>
	<a href="/articles/an-introduction-to-meta-viewport-and-viewport/device-pixel-ratio.jpg"><img src="/articles/an-introduction-to-meta-viewport-and-viewport/device-pixel-ratio_small.jpg" alt="スクリーンショット: device-pixel-ratio を使ったページと使わないページ"></a>
	<figcaption markdown="span">図6: HTC Desire のスクリーンショット2つ。左の [`width=device-width` のみを指定した例][23] では背景画像が拡大されぼやけて見える。右の [`device-pixel-ratio` を追加した例][24] では DPI を理解しているので、背景が綺麗に見える。</figcaption>
</figure>

[23]: http://people.opera.com/andreasb/viewport/ex02.html
[24]: http://people.opera.com/andreasb/viewport/ex05.html

### ターゲット密度を指定する

想像がついた方がいると思いますが、「ピクセルが思ったとおりではない」問題は viewport の設定にも影響します。HTC Desire 上の Opera Mobile 11 では、viewport に `width=device-width` と指定していました。そして、画面の幅が 480 デバイスピクセルである HTC Desire で表示されるのページの幅は、300 CSS ピクセル (480÷160% = 300) になります。

混乱してきましたか？ここで、いいお話があります。ほとんどすべての場合において、このことを意識する必要や心配する必要はありません。先ほど説明した大きな画像を用意するという方法に集中し、計算はモバイルブラウザにやらせてしまえばいいのです。

しかし、モバイル向けの地図サービスなど、ピクセルレベルでの制御がどうしても必要なケースというものもあります。そんな場合は `target-densitydpi` という viewport プロパティを使いましょう。このプロパティに `device-dpi` という値を与えると、_「拡大縮小はしなくていい。いやほんとに！画面の幅が持つデバイスピクセルをそのまま CSS ピクセルとして viewport を設定して。」_ といった意味になります。コードは次のようになります。

	<meta name="viewport" content="width=device-width, target-densitydpi=device-dpi">

Opera Mobile 11 は @viewport 規則で `target-densitydpi` をサポートしていないので、今は viewport メタタグで指定することになります。

<figure>
	<a href="/articles/an-introduction-to-meta-viewport-and-viewport/target-densitydpi.jpg"><img src="/articles/an-introduction-to-meta-viewport-and-viewport/target-densitydpi_small.jpg" alt="スクリーンショット: target-densitydpi を指定していないページとしているページ"></a>
	<figcaption markdown="span">図7: HTC Desire のスクリーンショット2つ。左の [`width=device-width` のみを指定した例][27] ではデフォルトのズーム倍率が 160% になっている。右の [`target-densitydpi` に `device-dpi` を指定した例][28] ではズームが無効化されている。</figcaption>
</figure>

[27]: http://people.opera.com/andreasb/viewport/ex02.html
[28]: http://people.opera.com/andreasb/viewport/ex06.html

`target-densitydpi` には `device-dpi` のほかにも、`high-dpi`, `medium-dpi`, `low-dpi`, そして実際の DPI 値を指定できるので、Web ページの対象環境に合わせられます。難しいと思った方もそこまで心配しないでください。これが必要となるケースはほとんどないと思います。

`target-densitydpi` に `device-dpi` を指定したとき、異なる DPI を持つ画面それぞれに対してレイアウトを調整したいケースがあるかもしれませんね。その場合は先程の `device-pixel-ratio` を使うと、特定の画面密度に対してスタイルを調整できます。

## おわりに

これで viewport の説明は終わりです。紹介した値を試してみて、どの組み合わせが一番よかった教えてください！

### 参考資料

- [Configuring the viewport][29]
- [Building web pages to support different screen densities][30]
- [CSS Device Adaptation][31]

[29]: http://developer.apple.com/library/safari/#documentation/appleapplications/reference/safariwebcontent/usingtheviewport/usingtheviewport.html
[30]: http://developer.android.com/reference/android/webkit/WebView.html
[31]: http://dev.w3.org/csswg/css-device-adapt/#the-lsquouser-zoomrsquo-property
