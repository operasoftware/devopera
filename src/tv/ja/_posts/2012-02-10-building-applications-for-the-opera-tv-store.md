---
title: Opera TV Store 向けアプリケーションの構築
authors:
- patrick-lauke
tags:
- opera-tv-store
- tv
language: ja
license: cc-by-3.0
---

- [はじめに](#introduction)
- [アプリケーションの構築](#building)
- [Opera TV Store アプリケーションに特化した要件](#requirements)
	- [解像度](#requirements-resolution)
	- [Opera TV Store API](#requirements-api)
	- [ナビゲーションと機能キー](#requirements-navigation)
	- [アプリケーションの終了](#requirements-closing)
	- [現在の実装における制限](#requirements-limitations)
- [Opera TV Store への提出](#submitting)

## はじめに

Opera TV Store は、Opera が審査を行い提供する、テレビ専用の Web アプリケーションのカタログです。開発者はこのポータルを通して、開発したアプリケーションの提出と共有を行えます。ポータルはストアフロント（Web ベースのアプリケーション）によりエンドユーザーにアプリケーションを提示し、ユーザーはアプリケーションに素早く簡単にアクセスすることができます。

<figure block="figure">
	<img elem="media" src="/articles/building-applications-for-the-opera-tv-store/sample-views.png" alt="Opera TV Store およびアプリケーションのサンプル">
	<figcaption elem="caption" markdown="span">Opera TV Store および天気予報アプリケーションのサンプル</figcaption>
</figure>

Opera TV Store のアプリケーションはダッシュボードでは静的なサムネイル画像として表示されます。ユーザーは TV Store カタログをブラウズして、好きなアプリケーションをインストールし、ダッシュボードに追加することができます。アプリケーションを選択すると、フルスクリーンモードで表示されます。

<figure block="figure">
	<img elem="media" src="/articles/building-applications-for-the-opera-tv-store/architecture.png" alt="Opera TV Store アーキテクチャダイアログ">
	<figcaption elem="caption" markdown="span">Opera TV Store のアーキテクチャの概要</figcaption>
</figure>

フルスクリーンで表示された Web アプリケーションは Opera のサーバーにより直接提供されているわけではありません。Opera TV Store は、アプリケーションの URL が参照可能なディレクトリとしてのみ機能します。

## アプリケーションの構築

Opera TV Store 向けのアプリケーションは本質的には一般的な Web アプリケーションであり、ユーザーのテレビ上のカスタマイズされた [Opera Devices SDK][12] のブラウジング環境によりレンダリングされます。このため、開発者は Opera ブラウザでサポートされている従来の Web テクノロジー（HTML5、CSS 3、JavaScript、SVG）をすべて利用できます。詳細に関しては、[Opera でサポートされる Web 仕様][13]（特に [Opera の各製品におけるサポートの比較][14]）のドキュメントを参照してください。

[12]: https://www.opera.com/business/devices/
[13]: https://www.opera.com/docs/specs/
[14]: https://www.opera.com/docs/specs/productspecs/

Opera Devices SDK は、デスクトップ版 Opera ブラウザと同じコアレンダリングをベースとしていますが、プラットフォーム特有の API があり、微妙なインテグレーションの違いがあります。このため開発者の方々には、Opera TV Store が動作する実際のテレビ上で（また / あるいは [Opera TV Emulator][15] を使用して）開発しているアプリケーションをテストされることをお勧めします。

[15]: https://www.opera.com/developer/tools/

テレビ向けの Web コンテンツの開発には、ユーザー操作における違いから、デバイスの機能やパフォーマンスの最適化の考慮まで、さまざまな取り組みが伴います。必要とされる調整や技術に関しては、[テレビ向け Web コンテンツの作成][16] および [TV セクション][17] 内の各記事をご覧ください。

[16]: /articles/creating-web-content-for-tv/
[17]: /tags/tv/

## Opera TV Store アプリケーションに特化した要件

アプリケーションの Opera TV Store への実装方法、また Opera TV Store からの起動方法により、以下の要件について留意する必要があります。

### 解像度

TV Store アプリケーションは、1280×720 の解像度をサポートすること。そのほかの一般的なテレビの解像度（1920×1080、960×540）は現在サポートされていません。TV Store のブラウザ自体は通常のスクロールをサポートしますが、アプリケーションはスクロールの必要性がないようにデザインしなければなりません。また場合によっては、アイテムやコンテンツの長いリストを表示する独自のメカニズムを提供する必要があります。

### Opera TV Store API

TV Store アプリケーションは Opera TV Store API を使用しなければなりません。API には _リモートコントロールの機能キー_ を使用しやすくしたり、_アプリケーションの終了_ のコントロールを提供するヘルパー機能が含まれています。この API は、以下の `script` 要素を含めることで簡単にアプリケーションに追加できます。

	<script src="https://apps.tvstore.opera.com/js-api/api.js"></script>

### ナビゲーションと機能キー

Opera TV Store は、リモートコントロールにある基本的な 4 方向キーを空間ナビゲーションに使用するようにデザインされています。アプリケーションが Opera TV Store ブラウザに組み込まれたデフォルトの空間ナビゲーションを使用して問題なく機能するかどうかをテストしてください。また、アプリケーション作成者は、リモートコントロールでのキー操作を取得し、アプリケーションのナビゲーションをアプリ側でハンドリングするようにすることもできます。リモートコントロールの機能キーのキーコードはデバイスによって異なるため、Opera TV Store ブラウザはあらかじめ組み込まれた定数（TV Store を実行できるデバイス向けにカスタマイズされた）を提供しています。詳細に関しては、[Opera TV Store アプリケーションでの機能キーのハンドリング][18] の記事をご覧ください。

[18]: /articles/functional-key-handling-in-opera-tv-store-applications/

### アプリケーションの終了

アプリケーションがダッシュボードから起動すると、新しいウィンドウにフルスクリーンモードで表示されます。Opera TV Store ブラウザ（Opera Devices SDK をベースとし、アプリケーションと TV Store 自体のレンダリングを担う）は、ユーザーに対して標準のインターフェイス要素を提示することはなく、アドレスバーや「戻る」ボタンなどのクロームが一切ないブラウザとして実行されます。ユーザーはリモートコントロールの _終了_ および/あるいは _戻る_ キーを通してアプリケーションを終了したり、ダッシュボードに戻ることができます。必須ではありませんが、Opera TV Store API の一部として提供されているカスタムの `opera.app.close()` メソッドを使用して、アプリケーションを終了するための明示的なオプションやボタンを提供することを推奨します。

### 現在の実装における制限

現在市場に出回っている Opera TV Store を搭載するデバイスには、メーカーが一定の機能をどのようにデバイスに実装したか、また、使用されている TV Store ソフトウェアのバージョンにより、いくつかの制限があります。

- [CORS （クロスオリジンリソースシェアリング）][19] サポートの不足： アプリケーションが CORS に依存している場合（特に `XMLHttpRequest` を使用している場合）、他のドメインからのリソースをリレーするには、ある形式のプロキシをアプリケーションの元のドメインに実装する必要があります。
- 一定のデバイスでは外部のメディア再生フレームワークがインテグレートされているため、複数の `audio` あるいは `video` 要素の同時再生は保証されない場合があります。

[19]: https://dev.opera.com/articles/view/dom-access-control-using-cross-origin-resource-sharing/

## Opera TV Store への提出

アプリケーションが完成しましたら、Opera TV Store に提出することができます。[Opera TV Store - Submission portal][20] にアクセスし、ダイアログに表示される手順に従ってください。

[20]: https://publish.tvstore.opera.com/

この記事は Opera TV Store 向けのアプリケーションに求められる最重要のガイドラインについてまとめたものです。詳しい制限や要件は、**acceptance criteria （承認基準）** / [Opera TV Store application publishing guidelines][21] を参照してください。アプリケーションを提出する前に、これらの基準を満たしているか、また記事内の実践方法や提案に沿って作成されているかを必ず確認してください。

[21]: https://publish.tvstore.opera.com/guidelines/
