Title: Opera エクステンションを始めよう
----
Date: 2010-10-29 12:30:16
----
Lang: ja
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<p class="note">DEPRECATED: This article is deprecated. We recommend using our <a href="http://dev.opera.com/articles/view/opera-extensions-quick-documentation-overview/">quick documentation overview</a> instead.</p>

<h2>はじめに</h2>

<p><a href="http://labs.opera.com/news/2010/10/21/">Opera 11 Labs release</a> には、新たにブラウザに機能を追加するエクステンションを実行する、ウェブ標準に基づいたフレームワークが含まれています。このエクステンションフレームワークは、 W3C Widgets や JavaScript を始めとする従来の標準を元に成り立っています。つまり、ウェブアプリケーションやウィジェットの作成スキルをそのままエクステンションの作成に転用できるということです。また、このフレームワークには <a href="http://dev.w3.org/html5/postmsg/">cross-document messaging</a> のような HTML5 の技術も使われています。</p>

<p>このリリースに先立ち、私達は沢山のリファレンス文書やチュートリアルを作成しましたし、また作成途中にあるものもたくさんあります。但し一つ警告があります: エクステンションの実装はまだ初期の開発段階にあり、安定していません。つまり、数週間内しは数ヶ月の間に、機能の追加や既存の API との調整といった、大きな変更がある場合があります。もちろん私達はできる限り文書が最新の状態にあり続けるよう努力します。ご質問等は、この度新たに設置された <a href="http://dev.opera.com/forums/forum/42202">Opera extensions development forum</a> までお寄せください。</p>

<h2>中味を垣間見る</h2>

<p><a href="http://my.opera.com/chooseopera/blog/">Choose Opera</a> 内の記事 <a href="http://my.opera.com/chooseopera/blog/come-and-play-with-opera-extensions">Come and play with Opera extensions</a> に Opera エクステンションについての丁寧な紹介と分かりやすいビデオがあります。 Opera エクステンションの内部に興味をお持ちで、コードを触ってみたい場合は、紹介記事 <a href="http://dev.opera.com/articles/view/whats-in-an-opera-extension-ja/">Opera エクステンションってどんなもの?</a> をご覧になった上で、簡単なエクステンションの作り方について <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world-ja/">Opera エクステンションで Hello World!</a> をお読み頂くことをお勧めします。</p>

<h2>API に関する文書</h2>

<p>Opera エクステンションには、基本であるウェブ標準技術以外にも、いくつかの独特な API があります。これらの API を通して、プログラマはタブやウィンドウといったブラウザの機能を自在にコントロールできるようになります。私達は可能な限りエクステンションの API を分かりやすいものにしたので、開発者の方々もこの API についてすぐに理解していただけると思います。</p>
 
<p>Opera エクステンションの API は名前空間 <code>opera.extensions</code> にあります。 <code>opera.extensions</code> は、殆どの API が利用しているグローバルオブジェクトです。例えば、 <code>tabs</code> オブジェクトを初期化する場合、 <code>opera.extensions.tabs</code> と書きます。</p>

<p>まず始めに <a href="http://dev.opera.com/articles/view/opera-extensions-quick-documentation-overview/#apireference">API Documentation overview page</a> をご覧になることをお勧めします。また Opera エクステンションの API に関するチュートリアルもご用意しました。これらではユーザーインターフェース、タブ、ウィンドウ、そしてメッセージングについての説明がなされています。</p>
 
<ul>
<li><a href="http://dev.opera.com/articles/view/opera-extensions-buttons-badges-and-popups/">Opera extensions: buttons, badges and popups</a>： この記事では <code>ToolbarContext</code>, <code>ToolbarUIItem</code>, <code>ToolbarUIItemProperties</code>, <code>Popup</code>, <code>Badge</code> の各オブジェクトをご紹介します。ツールチップやアイコンを始めとする、ツールバーの UI の作成について詳しくご説明します。</li>
<li><a href="http://dev.opera.com/articles/view/opera-extensions-tabs-ja/">Opera エクステンション：タブ</a>： この記事では <code>tabs</code> オブジェクトをご紹介し、タブの操作についてご説明します。</li>
<li><a href="http://dev.opera.com/articles/view/opera-extensions-windows-ja/">Opera エクステンション：ウィンドウ</a>： この記事では <code>windows</code> オブジェクトをご紹介し、ウィンドウの操作についてご説明します。</li>
<li><a href="http://dev.opera.com/articles/view/opera-extensions-messaging/">Opera extensions: Messaging</a>： この記事では <code>opera.extensions</code> の <code>postMessage</code> メソッドと onconnect, onmessage の各ハンドラをご紹介します。スクリプト・ポップアップ間のメッセージのやり取りの方法についてご説明します。</li>
</ul>

<h2>チュートリアル</h2>

<p>基本的な構造や様々な API に慣れてきたら、実践的なチュートリアルをお試しください。このチュートリアルは順次追加される予定です。</p>
<ul>
	<li><a href="http://dev.opera.com/articles/view/hands-on-building-an-opera-extension/">Hands-on tutorial: building an Opera extension</a>： どのように JavaScript を使ってページに追加機能を与えるかをご説明します。</li>
	<li><a href="http://dev.opera.com/articles/view/converting-userjs-to-extensions-ja/">UserJS を Opera エクテンションに</a>： Opera UserJS を Opera エクステンションに変換する方法をお教えします。</li>
</ul>

<h2>既知の問題</h2>
<ul>
	<li>&lt;script&gt; タグがなかったり https が使われていたりするページではエクステンションは動作しません(但し opera:config で明示的に設定することで動作させることができます)。</li>
	<li>バックグランドプロセスのデバッグには <code>opera.postError()</code> をお使いください。これは 表示 &gt; 開発者用ツール &gt; エラーコンソール に出力されます(Opera Dragonfly ではありません)。</li>
</ul>
