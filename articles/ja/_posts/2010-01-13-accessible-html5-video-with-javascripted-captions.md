---
title: JavaScript で実現する アクセシブルな字幕付き HTML5 ビデオ
authors:
- bruce-lawson
tags:
- captions
- html5
- multimedia
- open-web
- opera-10
- accessibility
- video
language: ja
translator: Masataka Yakura
license: cc-by-nc-sa-3.0
---

## ビデオのアクセシビリティ

HTML5 ではサードパーティ製プラグインに頼らず、ブラウザーが直接表示するかたちで Web ページにビデオを埋め込むことができます。(HTML5 video の真の力については、[HTML5 video の紹介][1]をご覧ください。)

[1]: https://dev.opera.com/articles/introduction-html5-video/

しかし、HTML5 や他のプロプライエタリな方式に関わらず、すべてのビデオににはアクセシビリティの問題があります。ビデオの内容にアクセスできない人に対して、良心的な開発者はどうすればよいのでしょうか。HTML5 の `video` 要素には `img` 要素にある `alt` 属性がありませんが、タグの間に「代替コンテンツ」を与えることができます。

	<video>
		あなたのブラウザーは Ogg Theora コーデックをサポートしていません。
		<a href="video.ogg">ビデオをダウンロード</a>
		して、オフラインで見てください。
	</video>

ただし、[仕様][2]では次のように書かれています。

[2]: http://dev.w3.org/html5/spec/video.html#video

> ...この要素の内容は、アクセシビリティの諸問題を解決するためのものではありません。聴覚障害、視覚障害者、身体障害や認知障害を持つ人に対してビデオの内容をアクセシブルにする場合、制作者は代替メディアストリームを提供することや、ユーザー補助機能 (キャプションや字幕トラックなど) を埋め込むことが期待されています。

理屈の上では、ビデオファイルが字幕を持つべきです。画像に埋め込まれたものではなく、別のファイルとして用意されたテキスト形式で、ビデオ本体と供にパッケージ化されるのが望ましいです。こうすれば、コンテンツについて一番知っている作成者が一度字幕を書くだけで、ビデオを自分のページに埋め込む人は字幕やトランスクリプトを簡単に取得することができます。

しかし、現実は、誰もそのやり方を知らず、またどのブラウザーもデータを取得しユーザーに提供する方法を知りません。ですから、その隙間を埋めるハックが必要になります。ここにあるデモは、トランスクリプトを `<div id="transcript">` で囲み、プレーンテキストとしてページ上に持たせたものです。こうすることで、ユーザーが JavaScript を無効にしてページにアクセスしても、ビデオとそのUI、「トランスクリプト」と書かれた見出し、トランスクリプトが順に現れます。

JavaScript が有効になっている場合は、トランスクリプトを一行ずつビデオの上に重ね字幕として表示します。字幕はプレーンテキストのままですから、支援技術は字幕にアクセスできます。また、スクリーン上にも表示され、ビデオと同期して切り替わります。

これがそのテクニックを使用した、おバカなビデオのサンプル [“How to Leverage a Synergy”][3] になります。 ([Ogg ビデオが利用可能なブラウザー][4] が必要です。)

[3]: http://people.opera.com/brucel/demo/video/accessible-html5-video-captions.html
[4]: http://www.opera.com/browser/next/

このコンセプトデモは Safari では動作しません。これは、Ogg という Opera や Firefox, Chrome がサポートするオープンなコーデックを Safari がサポートしていないからです。Safari のためにビデオをエンコードして、[`source` 要素][5] で複数のビデオ (Ogg と MP4) を指定すれば、このデモは動作します。なお、Internet Explorer は現時点で `video` 要素をサポートしていません。

[5]: http://dev.w3.org/html5/spec/video.html#the-source-element

ソースを表示すると、トランスクリプトが段落として意味的にマークアップされているのが分かると思います。しかし、ビデオの上に重なっている部分は `span` で囲まれています。これは、画面上に表示されているものの区切りは意味的ではなく、言葉が現れるタイミングと見た目の都合 (スクリーンを言葉で埋め尽くさない、など) によるからです。

スクリプトに字幕を表示するタイミングを知らせるため、すべての箇所にタイムスタンプを持たせました。とはいえ、テキスト中に埋め込むのではなく、HTML5 の新しい機能ですべての要素に指定できる[カスタム `data-` 属性][6]を利用して、データをスクリプトに渡しています。この属性は好きな名前を使うことができますが、"data-" という文字列からはじめる必要があります。この例では、`data-begin` と `data-end` という名前にしました。これらの名前が [W3C の Timed Text 仕様][7]と [SVG/SMIL アニメーション仕様][8]で使われているからです。

[6]: http://dev.w3.org/html5/spec/dom.html#embedding-custom-non-visible-data
[7]: http://www.w3.org/TR/2009/CR-ttaf1-dfxp-20090924/#timing-attribute-vocabulary
[8]: http://www.w3.org/TR/SVG/animate.html#TimingAttributes

私は `data-begin` を (ビデオの開始からの) タイムオフセットとして、`span` が現れて欲しい時間を指定しました。`data-end` 属性には、字幕が消える時間を指定しています。つまり、次のコード

	<span data-begin=1 data-end=6>
		Hi, my name’s Dr Archimedes Einstein…
	</span>

これは字幕がビデオの開始から1秒に現れ、開始から6秒で消えることになります (つまり、5秒間表示されます)。

スクリプトはトランスクリプトを囲む `div` を消します (JavaScript を使って CSS ルールを書き、`display:none` を指定しています)。スクリプトはこの隠された `div` から `span` を取り出します。これは次のようなコードです。

	var nodes = document.querySelectorAll('#transcript span');

取りだした字幕は、正しいタイミングでビデオの上に配置する必要があります。テキストを重ねるのは簡単です。ここでは、ビデオの上に絶対配置させた別の `div` (`id` に captions を指定) を用意しています。明るい背景の上に白いテキストが重なった場合の可読性を高めるため、CSS を使用してテキストに影をつけています。

	text-shadow: black 1px 1px 3px;

ビデのに `span` を重ねるタイミングを決定するため、スクリプトは `ontimeupdate` イベント (Opera ではビデオがおよそ 250 ミリ秒毎に発火します) を使用し、ビデオ API に何秒間再生しているのかを尋ねます。

	var v = document.querySelector('video');
	var now = v.currentTime;

次に、`span` 要素をループさせ、再生中の時間が `data-begin` と `data-end` の間に重なるものを探します。

この例では、CSS の generated content を利用し、JavaScript を使用しないほうのトランスクリプトに挿入しています。

	#transcript [data-begin]:before {
		content: ' [' attr(data-begin) 's-'
		attr(data-end)'s] ';
		font-size:80%;
		}

そして、CSS のテーブルを利用して整形しています。しかし、これらは別にしなくても構いません。

さっきも言ったように、これはハックです。この開発作業には多くの時間が必要になります (さらに、字幕ファイルを作るには音声を文字に起こし、時間を記録する必要がありますから、これも大変な作業です)。

また、このスクリプトにはいくつか問題があります。まず、トランスクリプト中の略語を `abbr` でマークアップする、もしくは外国語を `span lang=` でマークアップした場合、字幕にその情報が同期されません (問題にはならないと思いますが)。また、`aria-describedby` といった WAI-ARIA 情報を含むこともおこなっていません (ですから、ARIA の利用に関するフィードバックは大歓迎です)。

また、実際にサービスとして提供する場合は、JavaScript の有効無効という状態にかかわらず、ユーザーには字幕とトランスクリプトを切り替えるオプションを提供すべきです。なぜなら、ユーザーの中には携帯電話を利用していて、ビデオをダウンロードするよりも内容をテキストで見たい人がいるかもしれないからです。

コードはクリエイティブ・コモンズライセンスで提供されています。ですから自由に修正して、よろしければ[私にツイート][9]して知らせて下さい。

[9]: https://twitter.com/brucel

また、Daniel Davis の[多言語版サンプル][10]もご覧下さい。このサンプルでは、英語と日本語を再生中でも切り替えることができます。

[10]: http://people.opera.com/brucel/demo/video/multilingual-synergy.html

## もっと読む

- [`video` の仕様][11]
- [Opera でどのように `video` が実装されているか][12]

[11]: https://html.spec.whatwg.org/multipage/the-video-element.html#the-video-element
[12]: http://my.opera.com/core/blog/2009/12/31/re-introducing-video

## 謝辞

デモの JavaScript を書いてくれた [Philip Jägenstedt][13] と、価値ある提案をしてくれた David Storey, 学習机の前で広義をする私をベッドの上に立ちながらビデオに収めてくれた娘 Marina に感謝します。

[13]: https://twitter.com/foolip
