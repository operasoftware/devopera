Title: Opera TV Store 向けアプリケーションの構築
----
Date: 2012-07-24 05:39:32
----
Lang: ja
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<ul class="toc">
<li><a href="#introduction">はじめに</a></li>
<li><a href="#building">アプリケーションの構築</a></li>
<li><a href="#requirements">Opera TV Store アプリケーションに特化した要件</a>
<ul>
<li><a href="#requirements-resolution">解像度</a></li>
<li><a href="#requirements-api">Opera TV Store API</a></li>
<li><a href="#requirements-navigation">ナビゲーションと機能キー</a></li>
<li><a href="#requirements-closing">アプリケーションの終了</a></li>
<li><a href="#requirements-limitations">現在の実装における制限</a></li>
</ul></li>
<li><a href="#submitting">Opera TV Store への提出</a></li>
</ul>

<h2 id="introduction">はじめに</h2>

<p>Opera TV Store は、Opera が審査を行い提供する、テレビ専用の Web アプリケーションのカタログです。開発者はこのポータルを通して、開発したアプリケーションの提出と共有を行えます。ポータルはストアフロント（Web ベースのアプリケーション）によりエンドユーザーにアプリケーションを提示し、ユーザーはアプリケーションに素早く簡単にアクセスすることができます。</p>

<div>
  <img src="../building-applications-for-the-opera-tv-store/sample-views.png" alt="Opera TV Store およびアプリケーションのサンプル" />
  <p class="caption">Opera TV Store および天気予報アプリケーションのサンプル</p>
</div>

<p>Opera TV Store のアプリケーションはダッシュボードでは静的なサムネイル画像として表示されます。ユーザーは TV Store カタログをブラウズして、好きなアプリケーションをインストールし、ダッシュボードに追加することができます。アプリケーションを選択すると、フルスクリーンモードで表示されます。</p>

<div>
  <img src="../building-applications-for-the-opera-tv-store/architecture.png" alt="Opera TV Store アーキテクチャダイアログ" />
  <p class="caption">Opera TV Store のアーキテクチャの概要</p>
</div>

<p>フルスクリーンで表示された Web アプリケーションは Opera のサーバーにより直接提供されているわけではありません。Opera TV Store は、アプリケーションの URL が参照可能なディレクトリとしてのみ機能します。</p>

<h2 id="building">アプリケーションの構築</h2>

<p>Opera TV Store 向けのアプリケーションは本質的には一般的な Web アプリケーションであり、ユーザーのテレビ上のカスタマイズされた <a href="http://www.opera.com/business/devices/">Opera Devices SDK</a> のブラウジング環境によりレンダリングされます。このため、開発者は Opera ブラウザでサポートされている従来の Web テクノロジー（HTML5、CSS 3、JavaScript、SVG）をすべて利用できます。詳細に関しては、<a href="http://www.opera.com/docs/specs/">Opera でサポートされる Web 仕様</a>（特に <a href="http://www.opera.com/docs/specs/productspecs/">Opera の各製品におけるサポートの比較</a>）のドキュメントを参照してください。</p>

<p>Opera Devices SDK は、デスクトップ版 Opera ブラウザと同じコアレンダリングをベースとしていますが、プラットフォーム特有の API があり、微妙なインテグレーションの違いがあります。このため開発者の方々には、Opera TV Store が動作する実際のテレビ上で（また / あるいは <a href="http://www.opera.com/developer/tools/">Opera TV Emulator</a> を使用して）開発しているアプリケーションをテストされることをお勧めします。</p>

<p>テレビ向けの Web コンテンツの開発には、ユーザー操作における違いから、デバイスの機能やパフォーマンスの最適化の考慮まで、さまざまな取り組みが伴います。必要とされる調整や技術に関しては、<a href="http://dev.opera.com/articles/view/creating-web-content-for-tv/">テレビ向け Web コンテンツの作成</a> および <a href="http://dev.opera.com/tv/">TV セクション</a> 内の各記事をご覧ください。</p>

<h2 id="requirements">Opera TV Store アプリケーションに特化した要件</h2>

<p>アプリケーションの Opera TV Store への実装方法、また Opera TV Store からの起動方法により、以下の要件について留意する必要があります。</p>

<h3 id="requirements-resolution">解像度</h3>
<p>TV Store アプリケーションは、1280×720 の解像度をサポートすること。そのほかの一般的なテレビの解像度（1920×1080、960×540）は現在サポートされていません。TV Store のブラウザ自体は通常のスクロールをサポートしますが、アプリケーションはスクロールの必要性がないようにデザインしなければなりません。また場合によっては、アイテムやコンテンツの長いリストを表示する独自のメカニズムを提供する必要があります。</p>

<h3 id="requirements-api">Opera TV Store API</h3>
<p>TV Store アプリケーションは Opera TV Store API を使用しなければなりません。API には <em>リモートコントロールの機能キー</em> を使用しやすくしたり、<em>アプリケーションの終了</em> のコントロールを提供するヘルパー機能が含まれています。この API は、以下の <code>script</code> 要素を含めることで簡単にアプリケーションに追加できます。</p>
<pre><code>&lt;script src=&quot;https://apps.tvstore.opera.com/js-api/api.js&quot;&gt;&lt;/script&gt;</code></pre>

<h3 id="requirements-navigation">ナビゲーションと機能キー</h3>
<p>Opera TV Store は、リモートコントロールにある基本的な 4 方向キーを空間ナビゲーションに使用するようにデザインされています。アプリケーションが Opera TV Store ブラウザに組み込まれたデフォルトの空間ナビゲーションを使用して問題なく機能するかどうかをテストしてください。また、アプリケーション作成者は、リモートコントロールでのキー操作を取得し、アプリケーションのナビゲーションをアプリ側でハンドリングするようにすることもできます。リモートコントロールの機能キーのキーコードはデバイスによって異なるため、Opera TV Store ブラウザはあらかじめ組み込まれた定数（TV Store を実行できるデバイス向けにカスタマイズされた）を提供しています。詳細に関しては、<a href="http://dev.opera.com/articles/view/functional-key-handling-in-opera-tv-store-applications/">Opera TV Store アプリケーションでの機能キーのハンドリング</a> の記事をご覧ください。</p>

<h3 id="requirements-closing">アプリケーションの終了</h3>
<p>アプリケーションがダッシュボードから起動すると、新しいウィンドウにフルスクリーンモードで表示されます。Opera TV Store ブラウザ（Opera Devices SDK をベースとし、アプリケーションと TV Store 自体のレンダリングを担う）は、ユーザーに対して標準のインターフェイス要素を提示することはなく、アドレスバーや「戻る」ボタンなどのクロームが一切ないブラウザとして実行されます。ユーザーはリモートコントロールの <em>終了</em> および/あるいは <em>戻る</em> キーを通してアプリケーションを終了したり、ダッシュボードに戻ることができます。必須ではありませんが、Opera TV Store API の一部として提供されているカスタムの <code>opera.app.close()</code> メソッドを使用して、アプリケーションを終了するための明示的なオプションやボタンを提供することを推奨します。</p>

<h3 id="requirements-limitations">現在の実装における制限</h3>

<p>現在市場に出回っている Opera TV Store を搭載するデバイスには、メーカーが一定の機能をどのようにデバイスに実装したか、また、使用されている TV Store ソフトウェアのバージョンにより、いくつかの制限があります。</p>
<ul>
<li><a href="http://dev.opera.com/articles/view/dom-access-control-using-cross-origin-resource-sharing/">CORS （クロスオリジンリソースシェアリング）</a> サポートの不足： アプリケーションが CORS に依存している場合（特に <code>XMLHttpRequest</code> を使用している場合）、他のドメインからのリソースをリレーするには、ある形式のプロキシをアプリケーションの元のドメインに実装する必要があります。</li>
<li>一定のデバイスでは外部のメディア再生フレームワークがインテグレートされているため、複数の <code>audio</code> あるいは <code>video</code> 要素の同時再生は保証されない場合があります。</li>
</ul>

<h2 id="submitting">Opera TV Store への提出</h2>

<p>アプリケーションが完成しましたら、Opera TV Store に提出することができます。<a href="http://publish.tvstore.opera.com/">Opera TV Store - Submission portal</a> にアクセスし、ダイアログに表示される手順に従ってください。</p>
<p class="note">この記事は Opera TV Store 向けのアプリケーションに求められる最重要のガイドラインについてまとめたものです。詳しい制限や要件は、<strong>acceptance criteria （承認基準）</strong> / <a href="https://publish.tvstore.opera.com/guidelines/">Opera TV Store application publishing guidelines</a> を参照してください。アプリケーションを提出する前に、これらの基準を満たしているか、また記事内の実践方法や提案に沿って作成されているかを必ず確認してください。</p>
